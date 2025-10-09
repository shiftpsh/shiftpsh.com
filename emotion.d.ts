import { Language } from "./utils/translate/options";

declare module "@emotion/react" {
  interface Theme extends SolvedTheme {
    lang: Language;
  }
}
