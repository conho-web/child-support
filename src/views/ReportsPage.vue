<template>
  <div>
    <div class="wrapp">
      <p class="title">Название</p>
      <p class="title">Дата создания</p>
    </div>
    <div v-for="elem in getDocs" :key="elem" class="doc">
      <a :href="elem.file" target="_blank">{{ elem.remark }}</a>
      <p>{{ elem.uploaded_at.split("T")[0] }}</p>
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
  name: "ReportsPage",
  async created() {
    await axios
      .get("https://ecotextile.by/v1/documents/")
      .then(function (response) {
        store.commit("setDocs", response.data.results);
      });
  },
  computed: {
    ...mapGetters(["getDocs"]),
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },
};
</script>

<style scoped>
.wrapp {
  display: grid;
  grid-template-columns: 50% 30% 30%;
}

.doc {
  display: grid;
  grid-template-columns: 50% 30% 30%;
  margin: 1rem 0;
}

.title {
  font-size: 28px;
}

p {
  margin: 0;
}
</style>
