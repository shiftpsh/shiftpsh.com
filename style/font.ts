export const GOTHAM = [
  "Gotham",
  "Gotham SSm A",
  "Gotham SSm B",
  "Pretendard",
  "Inter",
  "Noto Sans JP",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple string Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
]
  .map((x) => (x.includes(" ") ? `"${x}"` : x))
  .join(", ");
