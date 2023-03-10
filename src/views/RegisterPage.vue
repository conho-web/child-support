<template>
  <div class="wrapperCenter">
    <div v-if="getSuccesRegister">Вы успешно зарегестрировались!</div>
    <div v-if="getErrors" class="error">
      Проверьте данные на правильность ввода!
    </div>
    <input
      type="text"
      placeholder="Имя пользователя"
      v-model="this.dataForRegister.username"
    />
    <input
      type="text"
      placeholder="Пароль"
      v-model="this.dataForRegister.password"
    />
    <input
      type="text"
      placeholder="Повторите пароль"
      v-model="this.dataForRegister.password2"
    />
    <input
      type="text"
      placeholder="E-mail"
      v-model="this.dataForRegister.email"
    />
    <input
      type="text"
      placeholder="Имя"
      v-model="this.dataForRegister.first_name"
    />
    <input
      type="text"
      placeholder="Фамилия"
      v-model="this.dataForRegister.last_name"
    />

    <button @click="registerUser">Зарегестрироваться</button>
    <button v-if="getSuccesRegister" @click="goLogin()">
      Перейти ко входу
    </button>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "RegisterPage",
  data() {
    return {
      dataForRegister: {
        username: null,
        password: null,
        password2: null,
        email: null,
        first_name: null,
        last_name: null,
      },
    };
  },
  methods: {
    async registerUser() {
      store.commit("setDataForRegister", this.dataForRegister);
      await store.dispatch("register");
      this.dataForRegister = {
        username: null,
        password: null,
        password2: null,
        email: null,
        first_name: null,
        last_name: null,
      };
    },
    goLogin() {
      this.$router.push({ name: "login" });
      store.commit("stateReset");
    },
  },
  computed: {
    ...mapGetters(["getErrors", "getSuccesRegister"]),
  },
};
</script>

<style scoped></style>
