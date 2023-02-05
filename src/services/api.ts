import ky from "ky";

const api = ky.create({
  prefixUrl: "https://poker.evenbetpoker.com/api/web/v2",
});

export default api;
