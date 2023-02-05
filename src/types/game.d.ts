export type Game = {
  id: number;
  image: string;
  title: string;
};

export type ApiGame = {
  id: number;
  attributes: {
    image: string;
    title: string;
  };
};

export type ApiGameUrl = {
  attributes: {
    "launch-options": {
      "game-url": string;
    };
  };
};
