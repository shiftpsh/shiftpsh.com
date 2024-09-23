import { Language, LANGUAGE_OPTIONS } from "../utils/translate/options";
import useLanguage from "./useLanguage";

const { default: defaultLang, definitions } = LANGUAGE_OPTIONS;
const availableLangs = Object.keys(definitions);

const useTranslation = <Translations = {}>(
  translations: Partial<Record<Language, Translations>> = {}
) => {
  const { lang, setLang } = useLanguage();
  const availableTranslations = Object.keys(translations);
  const resolvedLang = (
    lang in translations
      ? lang
      : availableTranslations.length > 0
      ? availableTranslations[0]
      : availableLangs.includes(lang)
      ? lang
      : defaultLang
  ) as Language;
  const translation = translations[resolvedLang] ?? {};

  return {
    t: translation as Translations,
    lang: resolvedLang,
    setLang,
  };
};

export default useTranslation;
