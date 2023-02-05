import { createRouter, createWebHistory } from "vue-router";
import AuthService from "@/services/auth.service";
import TokenService from "@/services/token.service";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!TokenService.getUser()?.login && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
