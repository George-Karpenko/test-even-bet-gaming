import type { ApiGame, ApiGameUrl, Game } from "@/types";

function parse(data: ApiGame): Game {
  return {
    id: data.id,
    image: data.attributes.image,
    title: data.attributes.title,
  };
}

function url(data: ApiGameUrl[]): string {
  return data[0].attributes["launch-options"]["game-url"];
}

export default {
  parse,
  url,
};
