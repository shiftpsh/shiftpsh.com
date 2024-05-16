import parse from "node-html-parser";
import { extractOnlyKeyValueTables } from "../../utils/parse/extractTables";
import { extractNumber } from "../../utils/parse/extractNumber";

const URL = "https://www.acmicpc.net/user/shiftpsh";

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3`;

export const fetchBaekjoon = async () => {
  const response = await fetch(URL, {
    headers: {
      "User-Agent": userAgent,
    },
  });
  const data = await response.text();
  const dom = parse(data);
  const candidateTables = extractOnlyKeyValueTables(dom);
  const table = candidateTables.find(
    (table) =>
      table.some(({ key }) => key.text === "등수") &&
      table.some(({ key }) => key.text === "맞은 문제")
  );
  if (!table) {
    throw new Error("No such user");
  }

  const rank = +extractNumber(
    table.find(({ key }) => key.text === "등수")!.value.text
  );
  const accepted = +extractNumber(
    table.find(({ key }) => key.text === "맞은 문제")!.value.text
  );

  return {
    rank,
    accepted,
  };
};

export type BaekjoonResponse = Awaited<ReturnType<typeof fetchBaekjoon>>;
