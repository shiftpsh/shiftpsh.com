import { Array, Literal, Number, Record, Static, String } from "runtypes";

const SolvedacResponseGuard = Record({
  handle: String,
  tier: Number,
  rating: Number,
  arenaTier: Number,
  arenaRating: Number,
  arenaMaxTier: Number,
  arenaMaxRating: Number,
  rank: Number,
});

const URL = "https://solved.ac/api/v3/user/show?handle=shiftpsh";

const resolveSolvedacAlgoColor = (tier: number) => {
  if (tier == 1) return "#9d4900";
  if (tier == 2) return "#a54f00";
  if (tier == 3) return "#ad5600";
  if (tier == 4) return "#b55d0a";
  if (tier == 5) return "#c67739";
  // silver
  if (tier == 6) return "#38546e";
  if (tier == 7) return "#3d5a74";
  if (tier == 8) return "#435f7a";
  if (tier == 9) return "#496580";
  if (tier == 10) return "#4e6a86";
  // gold
  if (tier == 11) return "#d28500";
  if (tier == 12) return "#df8f00";
  if (tier == 13) return "#ec9a00";
  if (tier == 14) return "#f9a518";
  if (tier == 15) return "#ffb028";
  // platinum
  if (tier == 16) return "#00c78b";
  if (tier == 17) return "#00d497";
  if (tier == 18) return "#27e2a4";
  if (tier == 19) return "#3ef0b1";
  if (tier == 20) return "#51fdbd";
  // diamond
  if (tier == 21) return "#009ee5";
  if (tier == 22) return "#00a9f0";
  if (tier == 23) return "#00b4fc";
  if (tier == 24) return "#2bbfff";
  if (tier == 25) return "#41caff";
  // ruby
  if (tier == 26) return "#e0004c";
  if (tier == 27) return "#ea0053";
  if (tier == 28) return "#f5005a";
  if (tier == 29) return "#ff0062";
  if (tier == 30) return "#ff3071";
  // master
  if (tier == 31) return "#b300e0";
  return "#000000";
};

const resolveSolvedacArenaColor = (tier: number): string => {
  if (tier <= 0) return "#818996";
  if (tier <= 2) return "#725039";
  if (tier <= 4) return "#2c4182";
  if (tier <= 6) return "#ffa515";
  if (tier <= 8) return "#46db66";
  if (tier <= 10) return "#30a1e5";
  if (tier <= 13) return "#ff143b";
  return "#818996";
};

export const fetchSolvedac = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = SolvedacResponseGuard.check(data);
  return {
    ...result,
    tierColor: resolveSolvedacAlgoColor(result.tier),
    arenaTierColor: resolveSolvedacArenaColor(result.arenaTier),
    arenaMaxTierColor: resolveSolvedacArenaColor(result.arenaMaxTier),
  };
};

export type SolvedacResponse = Awaited<ReturnType<typeof fetchSolvedac>>;
