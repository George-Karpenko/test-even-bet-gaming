import type { ApiBalance, Balance } from "@/types";

function parse(data: ApiBalance): Balance {
  return {
    currency: data.attributes.currency,
    available: data.attributes.available,
    bonus: data.attributes.bonus,
    inPlay: data.attributes["in-play"],
  };
}

export default {
  parse,
};
