import { Array, Literal, Number, Record, Static, String } from "runtypes";

const CodeforcesResponseGuard = Record({
  status: Literal("OK"),
  result: Array(
    Record({
      handle: String,
      rank: String,
      rating: Number,
      maxRank: String,
      maxRating: Number,
      lastOnlineTimeSeconds: Number,
      registrationTimeSeconds: Number,
      friendOfCount: Number,
      avatar: String,
      titlePhoto: String,
    })
  ),
});

const URL = "https://codeforces.com/api/user.info?handles=shiftpsh";

const resolveCodeforcesColor = (rating: number) => {
  if (rating < 1200) return "#808080";
  if (rating < 1400) return "#008000";
  if (rating < 1600) return "#03a89e";
  if (rating < 1900) return "#0000ff";
  if (rating < 2100) return "#aa00aa";
  if (rating < 2400) return "#ff8c00";
  return "#ff0000";
};

export const fetchCodeforces = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const { result } = CodeforcesResponseGuard.check(data);
  if (result.length === 0) {
    throw new Error("No such user");
  }
  const profile = result[0];
  return {
    ...profile,
    ratingColor: resolveCodeforcesColor(profile.rating),
    maxRatingColor: resolveCodeforcesColor(profile.maxRating),
  };
};

export type CodeforcesResponse = Awaited<ReturnType<typeof fetchCodeforces>>;
