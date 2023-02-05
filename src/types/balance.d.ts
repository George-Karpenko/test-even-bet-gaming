export type Balance = {
  currency: string;
  available: number;
  bonus: number;
  inPlay: number;
};

export type ApiBalance = {
  id: number;
  attributes: {
    currency: string;
    available: number;
    bonus: number;
    "in-play": number;
  };
};
