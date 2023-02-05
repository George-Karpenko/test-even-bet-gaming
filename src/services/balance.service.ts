import api from "./api";
import BalanceModule from "@/modules/balance.module";
import type { ApiBalance } from "@/types";
import tokenService from "./token.service";

class BalanceService {
  async listBalance() {
    const user = tokenService.getUser();
    const { data } = await api
      .get(`users/me/balance?clientId=default&auth=${user.accessToken}`)
      .json<{ data: ApiBalance[] }>();

    console.log(data);
    return Array.isArray(data) ? data.map(BalanceModule.parse) : [];
  }
}

export default new BalanceService();
