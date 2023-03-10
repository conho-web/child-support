<template>
  <div class="wrapperCenter">
    <input type="text" v-model="this.username" placeholder="Логин" />
    <input type="text" v-model="this.password" placeholder="Пароль" />
    <button @click="auth()">Войти</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "usernamePage",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    auth() {
      let payload = {
        username: this.username,
        password: this.password,
      };

      store.commit("setDataForLogin", payload);
      store.dispatch("auth");
    },
  },
};
</script>

<style lang="scss" module></style>
