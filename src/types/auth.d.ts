export type Auth = {
  id: number;
  login: string;
  accessToken: string;
  refreshToken: string;
};

export type ApiErrorAuth = {
  source: {
    pointer: string;
  };
  detail: string;
};

export type ApiAuth = {
  id: number;
  attributes: Tokens;
};

export type Tokens = {
  token: string;
  "refresh-token": string;
};
