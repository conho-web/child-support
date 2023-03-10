import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ReportsPage from "@/views/ReportsPage.vue";
import ItemsPage from "@/views/ItemsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/reports",
    name: "reports",
    component: ReportsPage,
  },
  {
    path: "/items",
    name: "items",
    component: ItemsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
