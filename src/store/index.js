import { createStore } from "vuex";
import router from "../router/index.js";
import axios from "axios";

export default createStore({
  state: {
    dataForRegister: {},
    dataForLogin: {},
    succesRegister: false,
    errors: false,
    docs: null,
    items: null,
  },
  getters: {
    getDataForRegister: (state) => {
      return state.dataForRegister;
    },
    getDataForLogin: (state) => {
      return state.dataForLogin;
    },
    getErrors: (state) => {
      return state.errors;
    },
    getSuccesRegister(state) {
      return state.succesRegister;
    },
    getDocs(state) {
      return state.docs;
    },
    getItems(state) {
      return state.items;
    },
  },
  mutations: {
    stateReset(state) {
      state.dataForRegister = {};
      state.succesRegister = false;
      state.errors = false;
    },
    setDataForRegister(state, dataForRegister) {
      state.dataForRegister = dataForRegister;
    },
    setDataForLogin(state, dataForLogin) {
      state.dataForLogin = dataForLogin;
    },
    setErrors(state, value) {
      state.errors = value;
    },
    setSuccesRegister(state, value) {
      state.succesRegister = value;
    },
    setDocs(state, value) {
      state.docs = value;
    },
    setItems(state, value) {
      state.items = value;
    },
    accessDecode(state, token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      localStorage.setItem("user", jsonPayload);
    },
  },
  actions: {
    async auth({ commit, getters }) {
      await axios
        .post("https://ecotextile.by/v1/auth/login/", getters.getDataForLogin)
        .then(function (response) {
          localStorage.setItem("access", response.data.access);
          localStorage.setItem("refresh", response.data.refresh);
          commit("accessDecode", response.data.access);
          router.push({ name: "home" });
        })
        .catch(function (error) {
          if (error) {
            window.console.log(error);
          }
        });
    },
    async register({ commit, getters }) {
      let url = "https://ecotextile.by/v1/auth/register/";
      await axios
        .post(url, getters.getDataForRegister)
        .then(function (response) {
          if (response.status === 201) {
            commit("setErrors", false);
            commit("setSuccesRegister", true);
          }
        })
        .catch(function (error) {
          if (error) {
            commit("setErrors", true);
          }
        });
    },
    async updateAccess({ commit }) {
      let url = "https://ecotextile.by/v1/auth/login/refresh/";
      let form_data = new FormData();
      form_data.append("refresh", localStorage.getItem("refresh"));
      await axios
        .post(url, form_data)
        .then(function (response) {
          if (response.status === 200) {
            localStorage.setItem("access", response.data.access);
            commit("accessDecode", response.data.access);
          }
        })
        .catch(function (error) {
          if (error) {
            localStorage.clear();
          }
        });
    },
  },
  modules: {},
});
