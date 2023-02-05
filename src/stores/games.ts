import { defineStore } from "pinia";
import ky from "ky";
import { ref } from "vue";
import GameService from "@/services/game.service";
import type { Game } from "@/types";

export const useGamesStore = defineStore("games", () => {
  const urlGame = ref("");
  const games = ref<Game[]>([]);
  async function listGames() {
    try {
      games.value = await GameService.listGames();
    } catch (error) {
      console.error(error);
    }
  }
  async function gameId(id: number) {
    try {
      urlGame.value = await GameService.readGame(id);
    } catch (error) {
      console.error(error);
    }
  }

  return { games, urlGame, listGames, gameId };
});
