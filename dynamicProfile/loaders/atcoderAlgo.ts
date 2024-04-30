import parse from "node-html-parser";
import { extractOnlyKeyValueTables } from "../../utils/parse/extractTables";
import { extractNumber } from "../../utils/parse/extractNumber";

const URL = "https://atcoder.jp/users/shiftpsh?contestType=algo&lang=en";

const resolveAtcoderColor = (rating: number) => {
  if (rating < 400) return "#808080";
  if (rating < 800) return "#804000";
  if (rating < 1200) return "#008000";
  if (rating < 1600) return "#00c0c0";
  if (rating < 2000) return "#0000ff";
  if (rating < 2400) return "#c0c000";
  if (rating < 2800) return "#ff8000";
  return "#ff0000";
};

export const fetchAtcoderAlgo = async () => {
  const response = await fetch(URL);
  const data = await response.text();
  const dom = parse(data);
  const candidateTables = extractOnlyKeyValueTables(dom);
  const table = candidateTables.find(
    (table) =>
      table.some(({ key }) => key.text === "Rating") &&
      table.some(({ key }) => key.text === "Highest Rating")
  );
  if (!table) {
    throw new Error("No such user");
  }

  const rating = +extractNumber(
    table.find(({ key }) => key.text === "Rating")!.value.text
  );
  const maxRating = +extractNumber(
    table.find(({ key }) => key.text === "Highest Rating")!.value.text
  );

  return {
    rating,
    maxRating,
    ratingColor: resolveAtcoderColor(rating),
    maxRatingColor: resolveAtcoderColor(maxRating),
  };
};

export type AtcoderAlgoResponse = Awaited<ReturnType<typeof fetchAtcoderAlgo>>;
