import { ReactNode } from "react";

export type CVDate = Date | [Date, Date] | "present" | [Date, "present"];

export type CVSubitem = {
  ko: ReactNode;
  en: ReactNode;
};

export type CVItem = {
  bold?: boolean;
  iconSrc?: string;
  color?: string;
  date: CVDate;
  title: {
    ko: ReactNode;
    en: ReactNode;
  };
  description?: {
    ko: ReactNode;
    en: ReactNode;
  };
  subitems?: CVSubitem[];
};

export type CVSection = {
  title: {
    ko: string;
    en: string;
  };
  items: CVItem[];
};
