import { defineStore } from "pinia";
import { ref } from "vue";
import BalanceService from "@/services/balance.service";
import type { Balance } from "@/types";
import router from "@/router";

export const useBalanceStore = defineStore("balance", () => {
  const balances = ref<Balance[]>([]);
  async function listBalance() {
    try {
      balances.value = await BalanceService.listBalance();
    } catch (error: any) {
      if (error.name === "HTTPError" && error.response.status === 401) {
        router.push({ name: "login" });
      }
    }
  }

  return { balances, listBalance };
});
