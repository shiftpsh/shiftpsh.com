import { Number, Record, String } from "runtypes";

const JyantamaResponseGuard = Record({
  nickname: String,
  level: Record({
    id: Number,
    score: Number,
    delta: Number,
  }),
  max_level: Record({
    id: Number,
    score: Number,
    delta: Number,
  }),
});

const URL = `https://5-data.amae-koromo.com/api/v2/pl3/player_stats/118354342/1262304000000/${Date.now()}?mode=26.24.22.25.23.21&tag=476208`;

const resolveJyantamaLevelKorean = (id: number) => {
  if (id === 20101) return "초심 1";
  if (id === 20102) return "초심 2";
  if (id === 20103) return "초심 3";
  if (id === 20201) return "작사 1";
  if (id === 20202) return "작사 2";
  if (id === 20203) return "작사 3";
  if (id === 20301) return "작걸 1";
  if (id === 20302) return "작걸 2";
  if (id === 20303) return "작걸 3";
  if (id === 20401) return "작호 1";
  if (id === 20402) return "작호 2";
  if (id === 20403) return "작호 3";
  if (id === 20501) return "작성 1";
  if (id === 20502) return "작성 2";
  if (id === 20503) return "작성 3";
  if (id >= 20700) return `혼천 ${id - 20700}`;
  return "???";
};

const resolveJyantamaLevelEnglish = (id: number) => {
  if (id === 20101) return "Novice 1";
  if (id === 20102) return "Novice 2";
  if (id === 20103) return "Novice 3";
  if (id === 20201) return "Adept 1";
  if (id === 20202) return "Adept 2";
  if (id === 20203) return "Adept 3";
  if (id === 20301) return "Expert 1";
  if (id === 20302) return "Expert 2";
  if (id === 20303) return "Expert 3";
  if (id === 20401) return "Master 1";
  if (id === 20402) return "Master 2";
  if (id === 20403) return "Master 3";
  if (id === 20501) return "Saint 1";
  if (id === 20502) return "Saint 2";
  if (id === 20503) return "Saint 3";
  if (id >= 20700) return `Celestial ${id - 20700}`;
  return "???";
};

const resolveJyantamaColor = (id: number) => {
  if (id >= 20700) return "#14849f";
  if (id >= 20500) return "#d93e32";
  if (id >= 20400) return "#de8b2d";
  if (id >= 20300) return "#e2c03f";
  if (id >= 20200) return "#40ac0b";
  if (id >= 20100) return "#98a400";
  return "#808080";
};

export const fetchJyantama3 = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = JyantamaResponseGuard.check(data);
  return {
    ...result,
    levelNumber: result.level.id % 10000,
    levelTitle: {
      ko: resolveJyantamaLevelKorean(result.level.id),
      en: resolveJyantamaLevelEnglish(result.level.id),
    },
    levelColor: resolveJyantamaColor(result.level.id),
  };
};

export type Jyantama3Response = Awaited<ReturnType<typeof fetchJyantama3>>;
