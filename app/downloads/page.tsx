"use client";

import {
  Cell,
  Divider,
  Item,
  Itemize,
  Paragraph,
  Row,
  Space,
  Tab,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import DownloadLink from "../../components/DownloadLink";
import FullwidthImage from "../../components/FullwidthImage";
import LinksRow from "../../components/LinksRow";
import MainContainer from "../../components/MainContainer";
import SectionCaption from "../../components/SectionCaption";
import CopyButton from "../../components/CopyButton";
import ColorTable from "./ColorTable";
import InternalLink from "../../components/InternalLink";
import ExternalLink from "../../components/ExternalLink";

const Page = () => {
  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>자료</Typo>
      <FullwidthImage
        src="/img/logo-splash.svg"
        alt="어두운 바탕과 가운데에 그려져 있는 shiftpsh 로고."
      />
      <SectionCaption>로고 및 색상</SectionCaption>
      <LinksRow>
        <DownloadLink href="/downloads/shiftpsh-logo-svg.zip">
          SVG (8.9KB)
        </DownloadLink>
        <DownloadLink href="/downloads/shiftpsh-logo-png.zip">
          PNG (265KB)
        </DownloadLink>
        <DownloadLink href="/downloads/shiftpsh-logo-ai-screen.zip">
          AI (스크린용, 512KB)
        </DownloadLink>
        <DownloadLink href="/downloads/shiftpsh-logo-ai-print.zip">
          AI (인쇄용, 2.2MB)
        </DownloadLink>
      </LinksRow>
      <Paragraph>
        키보드의 Shift 키를 상징하는 화살표와, &lsquo;시프트&rsquo; 및
        &lsquo;수현&rsquo;의 머리글자 초성 &lsquo;ㅅ&rsquo;를 형상화한 로고를
        사용하고 있습니다.
      </Paragraph>
      <ColorTable />
      <Divider />
      <FullwidthImage
        src="/img/specs-hanbyeol.png"
        alt="코랄색 바탕에 흰색 사선 스트라이프가 늘어져 있고, 그 위에 한별이가 그려져 있는 종이를 잘라 얹은 듯한 그림."
      />
      <SectionCaption>박한별</SectionCaption>
      <LinksRow>
        <DownloadLink href="/downloads/hanbyeol-specs.pdf">
          설정 문서 (577KB)
        </DownloadLink>
        <InternalLink href="/hanbyeol/guidelines">
          2차 창작 가이드라인
        </InternalLink>
      </LinksRow>
      <Paragraph>
        박한별(한별이)은 인터넷 페르소나 캐릭터입니다. 2014년부터 shiftpsh의
        인터넷 활동과 함께하고 있습니다.
      </Paragraph>
      <Divider />
      <SectionCaption>아카이브</SectionCaption>
      <Itemize>
        <Item>
          <ExternalLink href="https://shiftpsh.com/2021">
            shiftpsh.com (2021)
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/2019">
            shiftpsh.com (2019)
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/2017">
            shiftpsh.com (2017)
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/ed/7/">
            osu! 스킨 &ndash; SHIFTED 7: VIOLET CLARITY (2016)
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/ed/6/">
            osu! 스킨 &ndash; SHIFTED 6: EXPRESSIVE HARMONY (2015)
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/ed/5/">
            osu! 스킨 &ndash; shifted 5: snow dream (2014)
          </ExternalLink>
        </Item>
      </Itemize>
      <Space h={160} />
    </MainContainer>
  );
};

export default Page;
