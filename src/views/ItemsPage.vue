<template>
  <div>
    <h1>Товары</h1>
    <div class="wrapper">
      <div v-for="item in getItems" :key="item" class="item">
        <img :src="item.image" alt=" " width="200" height="200" />
        <p>Название: {{ item.title }}</p>
        <p>
          Цена: <b>{{ item.price }}</b>
        </p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import axios from "axios";
import store from "@/store";
import { mapGetters } from "vuex";
import Footer from "@/components/Footer.vue";

export default {
  name: "ItemsPage",
  async created() {
    await axios
      .get("https://ecotextile.by/v1/items/")
      .then(function (response) {
        store.commit("setItems", response.data.results);
      });
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.item {
  display: inline-block;
  background: white;
  padding: 1rem;
  margin: 1rem;
  max-width: 200px;
}
</style>
