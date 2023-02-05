import AuthService from "@/services/auth.service";
import { defineStore } from "pinia";
import router from "@/router";

export const useUserStore = defineStore("user", () => {
  async function login(user: { login: string; password: string }) {
    try {
      await AuthService.login(user);

      router.push({ name: "home" });
    } catch (error: any) {
      if (error.name === "HTTPError") {
        return (await error.response.json()).errors;
      }
    }
  }

  return { login };
});
