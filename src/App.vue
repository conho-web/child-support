<template>
  <router-view></router-view>
</template>

<style lang="scss">
body {
  background-image: linear-gradient(to bottom, #7b9dd7, #ffffff);
  background-repeat: no-repeat;
  background-size: contain;
  font-family: Arial;
}

.error {
  color: red;
}

input {
  background: #b5dfff;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: none;
  margin: 1rem 0;
}

button {
  padding: 14px 30px;
  background: #47ea68;
  text-decoration: none;
  border-radius: 10px;
  font-size: 18px;
  margin: 0 0 0 1rem;
}

.wrapperCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem 0 0 0;
}
</style>
