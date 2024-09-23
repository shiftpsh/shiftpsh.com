"use client";

import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { IconAt, IconBriefcase, IconSchool } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkInline from "../components/ExternalLinkInline";
import FullwidthImage from "../components/FullwidthImage";
import InternalLink from "../components/InternalLink";
import LinksRow from "../components/LinksRow";
import MainContainer from "../components/MainContainer";
import SectionCaption from "../components/SectionCaption";
import useTranslation from "../hooks/useTranslation";
import { Content } from "./components";
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
            <IconBriefcase />
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
        <HistoryEntry>
          <HistoryIcon>
            <IconBriefcase />
          </HistoryIcon>
          <HistoryContent>
            {t.history.ngine.former}{" "}
            <ExternalLinkInline href="https://career.nexon.com/user/recruit/member/postList?joinCorp=GN">
              {t.history.ngine.title}
            </ExternalLinkInline>{" "}
            {t.history.ngine.content}
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
        <FullwidthImage
          src="/img/intro-hb.jpg"
          alt="한별이가 그려진 아크릴 스탠드를 한 손으로 들고 이륙 준비 중인 비행기에서 찍은 사진."
        />
        <MainImageCaption>박한별</MainImageCaption>
      </figure>
      <SectionCaption>
        크리에이티브로 새로운 세상을 창조해가고 있습니다.
      </SectionCaption>
      <LinksRow>
        <InternalLink href="/gallery">작업</InternalLink>
        <InternalLink href="/downloads">자료</InternalLink>
      </LinksRow>
      <Content>
        생각하는 어떤 것이든 실제로 만들어 보려 하는 선천적 기질은 프로그래밍을
        시작하기 전에 시각디자인에 입문하는 계기가 되었으며, 현재까지도 이어지고
        있습니다. 지금 보시는 웹 사이트를 포함해, 포스터, 브랜딩, 인쇄물, UI/UX
        등, 폼 팩터를 넘나드는 다양한 디자인을 시도하고 있습니다. 카카오
        이모티콘{" "}
        <ExternalLinkInline href="https://e.kakao.com/t/cool-for-nothing">
          〈쓸데없이 멋진 답장〉
        </ExternalLinkInline>
        과{" "}
        <ExternalLinkInline href="https://koi.or.kr">
          한국정보올림피아드
        </ExternalLinkInline>{" "}
        응시자 시스템은 제 작업들 중 가장 잘 알려져 있는 것들입니다.
      </Content>
      <Content>
        2014년에 디자인한 저의 인터넷 페르소나 캐릭터 박한별(한별이)은 havana723
        작가님의 도움으로 솔브드의 몇몇 프로필 배경에 등장하여 프로그래밍을 하는
        사람들에게 친근함을 전달하며 사랑받고 있습니다. 카카오톡에서 havana723
        작가님의{" "}
        <ExternalLinkInline href="https://e.kakao.com/t/coding-with-hanbyeol">
          〈코딩하는 한별이〉
        </ExternalLinkInline>{" "}
        이모티콘과 수조 작가님의{" "}
        <ExternalLinkInline href="https://e.kakao.com/t/hanbyeol-eunha-suisous-ver">
          〈코딩하는 한별이와 은하 (수조 ver.)〉
        </ExternalLinkInline>
        를 만나보실 수 있습니다.
      </Content>
      <Space h={160} />
    </MainContainer>
  );
};

export default Page;
