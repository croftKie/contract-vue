import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/views/HomeView.vue";
import DashBoard from "@/components/views/DashBoard.vue";
import JobView from "@/components/views/JobView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/job",
    name: "JobView",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
