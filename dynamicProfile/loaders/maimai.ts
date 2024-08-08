import { Number, Record, String } from "runtypes";

const MaimaiResponseGuard = Record({
  name: String,
  rating: Number,
  profileImageSrc: String,
});

const URL =
  "https://raw.githubusercontent.com/shiftpsh/shiftpsh.com-maimai/main/public/db/profile-summary.json";

export const fetchMaimai = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const result = MaimaiResponseGuard.check(data);
  return result;
};

export type MaimaiResponse = Awaited<ReturnType<typeof fetchMaimai>>;
