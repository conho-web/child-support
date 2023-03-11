<template>
  <div>
    <h1>Документы</h1>
    <div v-for="elem in getDocs" :key="elem" class="doc">
      <p class="title">{{ elem.remark }}</p>
      <p>{{ elem.uploaded_at.split("T")[0] }}</p>
      <a :href="elem.file" class="download">Скачать</a>
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
.title {
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
}

.doc {
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  padding: 1rem;
  background: white;
  margin: 1rem 0;
}

.download {
  text-decoration: none;
  padding: 14px 30px;
  background: #47ea68;
  text-decoration: none;
  border-radius: 10px;
  font-size: 18px;
  margin: 1rem 0 0 0;
  color: white;
}

p {
  margin: 0;
}
</style>
