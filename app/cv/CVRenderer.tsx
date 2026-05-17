"use client";

import { Fragment } from "react";
import { CVDate, CVItem, CVSection } from "./types";
import { Item, Itemize, Typo } from "@solved-ac/ui-react";
import useTranslation from "../../hooks/useTranslation";
import Year from "./Year";
import styled from "@emotion/styled";
import { transparentize } from "polished";

const monthsBetween = (start: Date, end: Date): number => {
  const m =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  return Math.max(0, m);
};

const computeTotalMonths = (items: CVItem[], now: Date): number => {
  let total = 0;
  for (const item of items) {
    if (item.excludeFromTotal) continue;
    const d = item.date;
    if (!Array.isArray(d)) continue;
    const [start, endRaw] = d;
    const end = endRaw === "present" ? now : endRaw;
    total += monthsBetween(start, end);
  }
  return total;
};

const formatDuration = (months: number, lang: string): string => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (lang === "ko") {
    if (y && m) return `${y}년 ${m}개월`;
    if (y) return `${y}년`;
    return `${m}개월`;
  }
  if (y && m) return `${y}y ${m}mos`;
  if (y) return `${y} yrs`;
  return `${m} mos`;
};

const dateFormat = (date: CVDate, lang: string, short?: boolean): string => {
  const i18nfo = lang === "ko" ? "ko-KR" : "en-US";
  if (date === "present") {
    return lang === "ko" ? "현재" : "Present";
  }
  if (date instanceof Date) {
    if (short) {
      if (lang === "ko") {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}. ${month}`;
      }
      return new Intl.DateTimeFormat(i18nfo, {
        year: "numeric",
        month: "short",
      }).format(date);
    } else {
      return new Intl.DateTimeFormat(i18nfo, {
        dateStyle: "medium",
      }).format(date);
    }
  }
  return date.map((d) => dateFormat(d, lang, true)).join(" – ");
};

const CVItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const CVItemIconContainer = styled.div`
  flex: 0 0 48px;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #dddfe0;
`;

const CVItemIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
`;

const CVItemContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const CVSubitemList = styled.ul`
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  padding-inline-start: 1em;
  border-left: 1px solid ${({ theme }) => theme.color.border};
`;

const CVSubitem = styled.li`
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`;

const SectionTotalAside = styled.span`
  float: right;
  margin-top: 0.6em;
  color: ${({ theme }) => theme.color.text.secondary.main};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
`;

interface CVItemRendererProps {
  item: CVItem;
}

const CVItemRenderer = ({ item }: CVItemRendererProps) => {
  const { lang } = useTranslation();
  const { iconSrc, color, bold, date, title, description, subitems } = item;
  const alt =
    title[lang] && typeof title[lang] === "string" ? title[lang] : "icon";
  return (
    <CVItemLayout>
      {iconSrc && (
        <CVItemIconContainer
          style={
            color
              ? {
                  borderColor: color,
                  backgroundColor: transparentize(0.9, color),
                }
              : {}
          }
        >
          <CVItemIcon src={`/img/cv/${iconSrc}`} alt={alt} />
        </CVItemIconContainer>
      )}
      <CVItemContent>
        {bold ? <b>{title[lang]}</b> : title[lang]}
        {date ? <Year>{dateFormat(date, lang)}</Year> : <br />}
        {description && <div>{description[lang]}</div>}
        {subitems && subitems.length > 0 && (
          <CVSubitemList>
            {subitems.map((subitem, index) => (
              <CVSubitem key={index}>{subitem[lang]}</CVSubitem>
            ))}
          </CVSubitemList>
        )}
      </CVItemContent>
    </CVItemLayout>
  );
};

interface CVRendererProps {
  cv: CVSection[];
}

export const CVRenderer = ({ cv }: CVRendererProps) => {
  const { lang } = useTranslation();
  const now = new Date();
  return (
    <>
      {cv.map((section, index) => (
        <Fragment key={index}>
          <Typo h2>
            {section.title[lang]}
            {section.showTotal && (
              <SectionTotalAside>
                {formatDuration(computeTotalMonths(section.items, now), lang)}
              </SectionTotalAside>
            )}
          </Typo>
          {section.items.map((item, itemIndex) => (
            <CVItemRenderer key={itemIndex} item={item} />
          ))}
        </Fragment>
      ))}
    </>
  );
};
