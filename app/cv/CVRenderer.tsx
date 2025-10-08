"use client";

import { Fragment } from "react";
import { CVDate, CVItem, CVSection } from "./types";
import { Item, Itemize, Typo } from "@solved-ac/ui-react";
import useTranslation from "../../hooks/useTranslation";
import Year from "./Year";
import styled from "@emotion/styled";
import { transparentize } from "polished";

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

interface CVItemRendererProps {
  item: CVItem;
}

const CVItemRenderer = ({ item }: CVItemRendererProps) => {
  const { lang } = useTranslation();
  const { iconSrc, color, bold, date, title, description, subitems } = item;
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
          <CVItemIcon
            src={`/img/cv/${iconSrc}`}
            alt={typeof title[lang] === "string" ? title[lang] : "icon"}
          />
        </CVItemIconContainer>
      )}
      <CVItemContent>
        {bold ? <b>{title[lang]}</b> : title[lang]}
        {date ? <Year>{dateFormat(date, lang)}</Year> : <br />}
        {description && <div>{description[lang]}</div>}
        {subitems && subitems.length > 0 && (
          <Itemize>
            {subitems.map((subitem, index) => (
              <Item key={index}>{subitem[lang]}</Item>
            ))}
          </Itemize>
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
  return (
    <>
      {cv.map((section, index) => (
        <Fragment key={index}>
          <Typo h2>{section.title[lang]}</Typo>
          {section.items.map((item, itemIndex) => (
            <CVItemRenderer key={itemIndex} item={item} />
          ))}
        </Fragment>
      ))}
    </>
  );
};
