const HANGUL_QWERTY_MAP = {
  ㅂ: "q",
  ㅃ: "q",
  ㅈ: "w",
  ㅉ: "w",
  ㄷ: "e",
  ㄸ: "e",
  ㄱ: "r",
  ㄲ: "r",
  ㅅ: "t",
  ㅆ: "t",
  ㅛ: "y",
  ㅕ: "u",
  ㅑ: "i",
  ㅐ: "o",
  ㅒ: "o",
  ㅔ: "p",
  ㅖ: "p",
  ㅁ: "a",
  ㄴ: "s",
  ㅇ: "d",
  ㄹ: "f",
  ㅎ: "g",
  ㅗ: "h",
  ㅓ: "j",
  ㅏ: "k",
  ㅣ: "l",
  ㅋ: "z",
  ㅌ: "x",
  ㅊ: "c",
  ㅍ: "v",
  ㅠ: "b",
  ㅜ: "n",
  ㅡ: "m",
  ㅘ: "hk",
  ㅙ: "ho",
  ㅚ: "hl",
  ㅝ: "nj",
  ㅞ: "np",
  ㅟ: "nl",
  ㅢ: "ml",
  ᆨ: "q",
  ᆩ: "q",
  ᆪ: "rt",
  ᆫ: "s",
  ᆬ: "sw",
  ᆭ: "sg",
  ᆮ: "e",
  ᆯ: "f",
  ᆰ: "fr",
  ᆱ: "fa",
  ᆲ: "fq",
  ᆳ: "ft",
  ᆴ: "fx",
  ᆵ: "fv",
  ᆶ: "fg",
  ᆷ: "a",
  ᆸ: "q",
  ᆹ: "qt",
  ᆺ: "t",
  ᆻ: "T",
  ᆼ: "d",
  ᆽ: "w",
  ᆾ: "c",
  ᆿ: "z",
  ᇀ: "x",
  ᇁ: "v",
  ᇂ: "g",
} as const;

const HANGUL_NFD_TO_COMPAT_MAP = {
  ᄀ: "ㄱ",
  ᄁ: "ㄲ",
  ᄂ: "ㄴ",
  ᄃ: "ㄷ",
  ᄄ: "ㄸ",
  ᄅ: "ㄹ",
  ᄆ: "ㅁ",
  ᄇ: "ㅂ",
  ᄈ: "ㅃ",
  ᄉ: "ㅅ",
  ᄊ: "ㅆ",
  ᄋ: "ㅇ",
  ᄌ: "ㅈ",
  ᄍ: "ㅉ",
  ᄎ: "ㅊ",
  ᄏ: "ㅋ",
  ᄐ: "ㅌ",
  ᄑ: "ㅍ",
  ᄒ: "ㅎ",
  ᅡ: "ㅏ",
  ᅢ: "ㅐ",
  ᅣ: "ㅑ",
  ᅤ: "ㅒ",
  ᅥ: "ㅓ",
  ᅦ: "ㅔ",
  ᅧ: "ㅕ",
  ᅨ: "ㅖ",
  ᅩ: "ㅗ",
  ᅪ: "ㅘ",
  ᅫ: "ㅙ",
  ᅬ: "ㅚ",
  ᅭ: "ㅛ",
  ᅮ: "ㅜ",
  ᅯ: "ㅝ",
  ᅰ: "ㅞ",
  ᅱ: "ㅟ",
  ᅲ: "ㅠ",
  ᅳ: "ㅡ",
  ᅴ: "ㅢ",
  ᅵ: "ㅣ",
} as const;

export const toDecomposedHangul = (text: string) => {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code < 0xac00 || code > 0xd7a3) {
        return char;
      }
      const initial = Math.floor((code - 0xac00) / 588);
      const medial = Math.floor(((code - 0xac00) % 588) / 28);
      const final = (code - 0xac00) % 28;

      if (!final) {
        return String.fromCharCode(0x1100 + initial, 0x1161 + medial);
      } else {
        return String.fromCharCode(
          0x1100 + initial,
          0x1161 + medial,
          0x11a7 + final
        );
      }
    })
    .join("");
};

export const toHangulQwerty = (text: string) => {
  return text
    .split("")
    .map((char) => {
      if (char in HANGUL_QWERTY_MAP) {
        return HANGUL_QWERTY_MAP[char as keyof typeof HANGUL_QWERTY_MAP];
      }
      if (char in HANGUL_NFD_TO_COMPAT_MAP) {
        const compat =
          HANGUL_NFD_TO_COMPAT_MAP[
            char as keyof typeof HANGUL_NFD_TO_COMPAT_MAP
          ];
        return HANGUL_QWERTY_MAP[compat];
      }
      return char;
    })
    .join("");
};
