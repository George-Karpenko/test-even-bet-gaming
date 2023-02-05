import type { ApiAuth, Auth } from "@/types";

function parse(data: ApiAuth & { login: string }): Auth {
  return {
    id: data.id,
    login: data.login,
    accessToken: data.attributes.token,
    refreshToken: data.attributes["refresh-token"],
  };
}

export default {
  parse,
};
