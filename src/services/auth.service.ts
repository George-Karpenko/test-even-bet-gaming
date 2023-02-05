import api from "./api";
import TokenService from "./token.service";
import Auth from "@/modules/auth.module";
import ky from "ky";
import type { ApiAuth, Tokens } from "@/types";
import router from "@/router";

class AuthService {
  async login({ login, password }: { login: string; password: string }) {
    const { data } = await api
      .post("login?clientId=default", {
        json: { login, password },
        headers: {
          "content-type": "application/json",
        },
      })
      .json<{ data: ApiAuth[] }>();
    const auth = Auth.parse({ ...data[0], login: login });
    TokenService.setUser(auth);

    return auth;
  }

  logout() {
    TokenService.removeUser();
    router.push({ name: "login" });
  }

  async updateAuth() {
    try {
      const data = await ky
        .post(
          "https://poker.evenbetpoker.com/api/web/auth/token?clientId=default",
          {
            json: {
              clientId: "default",
              refreshToken: TokenService.getLocalRefreshToken(),
            },
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .json<Tokens>();

      const user = {
        ...JSON.parse(localStorage.getItem("user")!),
        refreshToken: data["refresh-token"],
        accessToken: data.token,
      };

      TokenService.setUser(user);
    } catch (error: any) {
      if (error.name === "HTTPError") {
        this.logout();
      }
    }
  }
}

export default new AuthService();
