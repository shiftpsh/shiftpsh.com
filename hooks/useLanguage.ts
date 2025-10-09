"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Language, LANGUAGE_OPTIONS } from "../utils/translate/options";

const { default: defaultLang, localStorageKey } = LANGUAGE_OPTIONS;
const availableLanguages = Object.keys(LANGUAGE_OPTIONS.definitions);

const useLanguage = () => {
  const searchParams = useSearchParams();
  const [browserLang, setBrowserLang] = useState<Language | null>(null);
  const [lang, setLang] = useState<Language | null>(null);

  useEffect(() => {
    const browserLanguage = navigator.languages.find((language) => {
      const [lang] = language.split("-");
      return availableLanguages.includes(lang);
    }) as Language | undefined;

    setBrowserLang(browserLanguage || null);
  }, []);

  const handleChangeLanguage = (newLang: Language) => {
    setLang(newLang);
    window.localStorage.setItem(localStorageKey, newLang);
    const event = new Event("localStorageLangChange");
    document.dispatchEvent(event);
  };

  // Set language based on query parameter
  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam && availableLanguages.includes(langParam)) {
      handleChangeLanguage(langParam as Language);
    }
  }, [searchParams]);

  const handleLocalStorageUpdate = useCallback(() => {
    const storedLang = window.localStorage.getItem(localStorageKey);

    if (
      storedLang &&
      storedLang !== lang &&
      availableLanguages.includes(storedLang)
    ) {
      setLang(storedLang as Language);
    } else if (browserLang) {
      window.localStorage.setItem(
        localStorageKey,
        (browserLang || defaultLang) as string
      );
    }
  }, [browserLang, lang]);

  useEffect(() => {
    handleLocalStorageUpdate();

    document.addEventListener("localStorageLangChange", () => {
      handleLocalStorageUpdate();
    });

    return () => {
      document.removeEventListener(
        "localStorageLangChange",
        handleLocalStorageUpdate
      );
    };
  }, [handleLocalStorageUpdate]);

  return {
    lang: (lang ?? browserLang ?? defaultLang) as Language,
    setLang: handleChangeLanguage,
  } as const;
};

export default useLanguage;
