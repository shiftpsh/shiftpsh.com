import { toDecomposedHangul, toHangulQwerty } from "./hangul";

export const normalizeQuery = (query: string) => {
  return toHangulQwerty(toDecomposedHangul(query))
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
};
