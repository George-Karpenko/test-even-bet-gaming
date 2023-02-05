import api from "./api";
import GameModule from "@/modules/game.module";
import type { ApiGame, ApiGameUrl, Game } from "@/types";

class GameService {
  async listGames(): Promise<Game[]> {
    const { data } = await api
      .get("casino/games?clientId=default")
      .json<{ data: ApiGame[] }>();

    console.log(data);
    return Array.isArray(data) ? data.map(GameModule.parse) : [];
  }

  async readGame(gameId: number): Promise<string> {
    const { data } = await api
      .post(`casino/games/${gameId}/session-demo?clientId=default`, {
        json: {
          clientId: "default",
          gameId,
        },
        headers: {
          "content-type": "application/json",
        },
      })
      .json<{ data: ApiGameUrl[] }>();
    return GameModule.url(data);
  }
}

export default new GameService();
