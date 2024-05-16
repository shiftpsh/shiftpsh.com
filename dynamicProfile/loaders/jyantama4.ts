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

const URL = `https://5-data.amae-koromo.com/api/v2/pl4/player_stats/118354342/1262304000000/${Date.now()}?mode=16.12.9.15.11.8&tag=476208`;

const resolveJyantamaLevel = (id: number) => {
  if (id === 10101) return "초심 1";
  if (id === 10102) return "초심 2";
  if (id === 10103) return "초심 3";
  if (id === 10201) return "작사 1";
  if (id === 10202) return "작사 2";
  if (id === 10203) return "작사 3";
  if (id === 10301) return "작걸 1";
  if (id === 10302) return "작걸 2";
  if (id === 10303) return "작걸 3";
  if (id === 10401) return "작호 1";
  if (id === 10402) return "작호 2";
  if (id === 10403) return "작호 3";
  if (id === 10501) return "작성 1";
  if (id === 10502) return "작성 2";
  if (id === 10503) return "작성 3";
  if (id >= 10700) return `혼천 ${id - 10700}`;
  return "???";
};

const resolveJyantamaColor = (id: number) => {
  if (id >= 10700) return "#14849f";
  if (id >= 10500) return "#d93e32";
  if (id >= 10400) return "#de8b2d";
  if (id >= 10300) return "#e2c03f";
  if (id >= 10200) return "#40ac0b";
  if (id >= 10100) return "#98a400";
  return "#808080";
};

export const fetchJyantama4 = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = JyantamaResponseGuard.check(data);
  return {
    ...result,
    levelNumber: result.level.id % 10000,
    levelTitle: resolveJyantamaLevel(result.level.id),
    levelColor: resolveJyantamaColor(result.level.id),
  };
};

export type Jyantama4Response = Awaited<ReturnType<typeof fetchJyantama4>>;
