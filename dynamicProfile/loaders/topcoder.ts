import { Literal, Number, Record, String } from "runtypes";

const TopcoderResponseGuard = Record({
  handle: String,
  maxRating: Record({
    rating: Number,
    track: Literal("DATA_SCIENCE"),
    ratingColor: String,
  }),
});

const URL = "https://api.topcoder.com/v5/members/shiftpsh";

export const fetchTopcoder = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = TopcoderResponseGuard.check(data);
  return result;
};

export type TopcoderResponse = Awaited<ReturnType<typeof fetchTopcoder>>;
