"use client";

import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import {
  IconAt,
  IconBriefcase,
  IconCheck,
  IconGlobe,
  IconLocationPin,
  IconMapPin,
  IconSchool,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkInline from "../components/ExternalLinkInline";
import FullwidthImage from "../components/FullwidthImage";
import InternalLink from "../components/InternalLink";
import LinksRow from "../components/LinksRow";
import MainContainer from "../components/MainContainer";
import SectionCaption from "../components/SectionCaption";
import useTranslation from "../hooks/useTranslation";
import { translations } from "./translations";

const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

const IntroBold = styled.span`
  font-weight: 800;
  color: black;
`;

const BiggerSectionCaption = styled(SectionCaption)`
  font-weight: 400;
  font-size: 1.8em;
  margin-left: -0.1ch;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const HistoryEntries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HistoryEntry = styled.div`
  display: flex;
  gap: 32px;
`;

const HistoryIcon = styled.div`
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  min-width: 0;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const HistoryContent = styled.div`
  flex: 1 0 0;
  min-width: 0;
`;

const MainImageCaption = styled.figcaption`
  text-align: right;
`;

const Email = styled.img`
  height: 1em;
  vertical-align: middle;
`;

const Page = () => {
  const { t } = useTranslation(translations);
  const [clientInitialized, setClientInitialized] = useState(false);

  useEffect(() => {
    setClientInitialized(true);
  }, []);

  return (
    <MainContainer>
      <Space h={160} />
      <Logo src="/shiftpsh-logo-2019.svg" alt="shiftpsh" />
      <BiggerSectionCaption>
        <IntroBold>{t.intro.title}</IntroBold> {t.intro.content}
      </BiggerSectionCaption>
      <Space h={32} />
      <Typo h3 no-margin>
        박수현 Suhyun Park
      </Typo>
      <Space h={16} />
      <HistoryEntries>
        <HistoryEntry>
          <HistoryIcon>
            <IconAt />
          </HistoryIcon>
          <HistoryContent>
            <a href={`mailto:${clientInitialized ? "me@shiftpsh.com" : ""}`}>
              <Email
                src="/img/email.svg"
                alt={clientInitialized ? "me@shiftpsh.com" : ""}
              />
            </a>
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconMapPin />
          </HistoryIcon>
          <HistoryContent>{t.history.location}</HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconBriefcase />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline href="https://company.nexon.com">
              {t.history.nexon.title}
            </ExternalLinkInline>{" "}
            {t.history.nexon.content}
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconCheck />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline href="https://solved.ac">
              {t.history.solved.title}
            </ExternalLinkInline>{" "}
            {t.history.solved.content}
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconSchool />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline href="https://www.sogang.ac.kr">
              {t.history.sogang.title}
            </ExternalLinkInline>{" "}
            {t.history.sogang.content}
          </HistoryContent>
        </HistoryEntry>
      </HistoryEntries>
      <Space h={16} />
      <LinksRow>
        <InternalLink href="/links">{t.links}</InternalLink>
        <InternalLink href="/cv">{t.cv}</InternalLink>
      </LinksRow>
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/img/intro-solvedac.jpg"
          alt={t.solved.figure.alt}
        />
        <MainImageCaption>{t.solved.figure.caption}</MainImageCaption>
      </figure>
      <SectionCaption>{t.solved.title}</SectionCaption>
      <LinksRow>
        <ExternalLink href="https://solved.ac">
          {t.solved.links.solved}
        </ExternalLink>
        <ExternalLink href={t.solved.links.youtubeLink}>
          {t.solved.links.youtube}
        </ExternalLink>
      </LinksRow>
      <Space h={16} />
      {t.solved.content}
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/img/intro-icpc.jpg"
          alt={t.problemsolving.figure.alt}
        />
        <MainImageCaption>{t.problemsolving.figure.caption}</MainImageCaption>
      </figure>
      <SectionCaption>{t.problemsolving.title}</SectionCaption>
      <LinksRow>
        <InternalLink href="/cv">{t.problemsolving.links.cv}</InternalLink>
        <ExternalLink href="https://icpc.global/ICPCID/2ALMJW44APYS">
          {t.problemsolving.links.icpc}
        </ExternalLink>
      </LinksRow>
      <Space h={16} />
      {t.problemsolving.content}
      <Space h={72} />
      <figure>
        <FullwidthImage src="/img/intro-hb.jpg" alt={t.creative.figure.alt} />
        <MainImageCaption>{t.creative.figure.caption}</MainImageCaption>
      </figure>
      <SectionCaption>{t.creative.title}</SectionCaption>
      <LinksRow>
        <InternalLink href="/gallery">{t.creative.links.gallery}</InternalLink>
        <InternalLink href="/downloads">
          {t.creative.links.downloads}
        </InternalLink>
      </LinksRow>
      {t.creative.content}
      <Space h={160} />
    </MainContainer>
  );
};

export default Page;
