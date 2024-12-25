"use client";

import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { IconAt, IconBriefcase, IconCheck, IconSchool } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkInline from "../components/ExternalLinkInline";
import FullwidthImage from "../components/FullwidthImage";
import InternalLink from "../components/InternalLink";
import LinksRow from "../components/LinksRow";
import MainContainer from "../components/MainContainer";
import SectionCaption from "../components/SectionCaption";

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

const Content = styled.p`
  color: #393e45;
  text-align: justify;
  margin: 1em 0;
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
  const [clientInitialized, setClientInitialized] = useState(false);

  useEffect(() => {
    setClientInitialized(true);
  }, []);

  return (
    <MainContainer>
      <Space h={160} />
      <Logo src="/shiftpsh-logo-2019.svg" alt="shiftpsh" />
      <BiggerSectionCaption>
        <IntroBold>안녕하세요, 개발자 겸 디자이너 박수현입니다.</IntroBold>{" "}
        분야를 불문하고 능력치를 최대한 발휘해 문제를 정의하고 해결하는 것을
        좋아합니다. 많은 사람에게 도움이 되는 디자인과 소프트웨어를 만들기 위해
        끊임없이 고민하고 있습니다.
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
            <ExternalLinkInline href="https://company.nexon.com">
              넥슨
            </ExternalLinkInline>{" "}
            인텔리전스랩스 알고리즘연구팀 (예정)
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconCheck />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline href="https://solved.ac">
              솔브드
            </ExternalLinkInline>{" "}
            개발자
          </HistoryContent>
        </HistoryEntry>
        <HistoryEntry>
          <HistoryIcon>
            <IconSchool />
          </HistoryIcon>
          <HistoryContent>
            <ExternalLinkInline href="https://www.sogang.ac.kr">
              서강대학교
            </ExternalLinkInline>{" "}
            컴퓨터공학과 학부 (졸업예정)
          </HistoryContent>
        </HistoryEntry>
      </HistoryEntries>
      <Space h={16} />
      <LinksRow>
        <InternalLink href="/links">모든 연락처/링크</InternalLink>
        <InternalLink href="/cv">자세한 이력</InternalLink>
      </LinksRow>
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/img/intro-solvedac.jpg"
          alt="solved.ac 그랜드 아레나 파티에서 대회에 참전 중인 참가자들의 뒷모습을 촬영한 사진."
        />
        <MainImageCaption>solved.ac Grand Arena (2024)</MainImageCaption>
      </figure>
      <SectionCaption>
        솔브드는 대한민국이 코딩 테스트와 알고리즘 문제해결을 공부하는 방법을
        바꿨습니다.
      </SectionCaption>
      <LinksRow>
        <ExternalLink href="https://solved.ac">solved.ac</ExternalLink>
        <ExternalLink href="https://www.youtube.com/watch?v=ggD9ry05axw">
          소개 (프로그래머스 컨퍼런스)
        </ExternalLink>
      </LinksRow>
      <Space h={16} />
      <Content>
        커뮤니티의 문제 난이도 기여를 기반으로 하여 알고리즘 문제해결을
        게이미피케이션하고, 이를 통해 즐겁게 문제를 풀면서 성장한 프로그래머들이
        다시 커뮤니티에 기여하도록 하는 선순환 모델은 대한민국 최대 온라인
        저지인{" "}
        <ExternalLinkInline href="https://acmicpc.net">
          백준 온라인 저지
        </ExternalLinkInline>
        의 방대한 문제 데이터베이스와 만나 국내외 15만 개발자의 성장을 돕고
        있습니다.
      </Content>
      <Content>
        솔브드만의 문제 난이도는 이제는 알고리즘 문제 난이도 체계의 de facto가
        되어, 여러 서적에서 난이도 지표로 활용되고 다른 온라인 저지 및
        프로그래밍 대회 출제자들이 활발히 참고하고 있습니다.
      </Content>
      <Space h={72} />
      <figure>
        <FullwidthImage
          src="/img/intro-icpc.jpg"
          alt="ICPC World Finals Moscow에서 서강대학교 Redshift 팀이 입장하는 모습을 촬영한 사진."
        />
        <MainImageCaption>ICPC World Finals Moscow (2021)</MainImageCaption>
      </figure>
      <SectionCaption>
        다양한 문제를 창의적으로 정의하고 논리적으로 해결해나가고 있습니다.
      </SectionCaption>
      <LinksRow>
        <InternalLink href="/cv">이력</InternalLink>
        <ExternalLink href="https://icpc.global/ICPCID/2ALMJW44APYS">
          ICPCID
        </ExternalLink>
      </LinksRow>
      <Space h={16} />
      <Content>
        현실의 문제를 기술적으로 해결하는 것을 좋아하며, 기술적인 문제 자체를
        해결하는 것도 즐깁니다. 솔브드 또한 기술적인 문제를 해결하는 필드에서
        현실의 문제를 발견하고, 다시 현실의 문제를 기술적으로 해결해나가는
        과정이자 결과물입니다.
      </Content>
      <Content>
        최대 규모의 국제 프로그래밍 대회인{" "}
        <ExternalLinkInline href="https://icpc.global/">
          국제 대학생 프로그래밍 대회(ICPC)
        </ExternalLinkInline>{" "}
        한국 대표로 결승에 진출하고, 대규모 국제 해커톤인{" "}
        <ExternalLinkInline href="https://asia.hackjunction.com/home/">
          정션 아시아
        </ExternalLinkInline>{" "}
        해커톤에서 2위를 차지하는 등 여러 대회에 도전하여 유수한 성과를
        거두었습니다. 또한,{" "}
        <ExternalLinkInline href="https://www.nypc.co.kr/">
          넥슨 청소년 프로그래밍 챌린지(NYPC)
        </ExternalLinkInline>{" "}
        출제위원으로 여러 문제를 출제하였습니다.
      </Content>
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
