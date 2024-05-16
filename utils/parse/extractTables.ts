import { HTMLElement } from "node-html-parser";

export const extractTables = (dom: HTMLElement): HTMLElement[][][] => {
  const tables = dom.querySelectorAll("table");

  return Array.from(tables).map((table) => {
    const rows = table.querySelectorAll("tr");
    return Array.from(rows).map((row) => {
      const cells = row.querySelectorAll("th,td");
      return Array.from(cells);
    });
  });
};

export const extractOnlyKeyValueTables = (
  dom: HTMLElement
): {
  key: HTMLElement;
  value: HTMLElement;
}[][] => {
  const tables = extractTables(dom);
  return tables
    .filter((table) => table.every((row) => row.length === 2))
    .map((table) =>
      table.map(([key, value]) => ({
        key,
        value,
      }))
    );
};
