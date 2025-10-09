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
import useTranslation from "../../hooks/useTranslation";
import { translations } from "./translations";

const Page = () => {
  const { t } = useTranslation(translations);

  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>{t.downloads}</Typo>
      <FullwidthImage src="/img/logo-splash.svg" alt={t.logo_and_colors.alt} />
      <SectionCaption>{t.logo_and_colors.caption}</SectionCaption>
      <LinksRow>
        <DownloadLink href="/downloads/shiftpsh-logo-svg.zip">
          SVG (8.9KB)
        </DownloadLink>
        <DownloadLink href="/downloads/shiftpsh-logo-png.zip">
          PNG (265KB)
        </DownloadLink>
        <DownloadLink href="/downloads/shiftpsh-logo-ai-screen.zip">
          {t.logo_and_colors.ai_screen}
        </DownloadLink>
        <DownloadLink href="/downloads/shiftpsh-logo-ai-print.zip">
          {t.logo_and_colors.ai_print}
        </DownloadLink>
      </LinksRow>
      <Paragraph>{t.logo_and_colors.description}</Paragraph>
      <ColorTable />
      <Divider />
      <FullwidthImage src="/img/specs-hanbyeol.png" alt={t.hanbyeol.alt} />
      <SectionCaption>{t.hanbyeol.caption}</SectionCaption>
      <LinksRow>
        <DownloadLink href="/downloads/hanbyeol-specs.pdf">
          {t.hanbyeol.specs}
        </DownloadLink>
        <InternalLink href="/hanbyeol/guidelines">
          {t.hanbyeol.guidelines}
        </InternalLink>
      </LinksRow>
      <Paragraph>{t.hanbyeol.description}</Paragraph>
      <Divider />
      <SectionCaption>{t.archive.caption}</SectionCaption>
      <Itemize>
        <Item>
          <ExternalLink href="https://shiftpsh.com/2021">
            {t.archive.items["2021"]}
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/2019">
            {t.archive.items["2019"]}
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/2017">
            {t.archive.items["2017"]}
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/ed/7/">
            {t.archive.items.ed_7}
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/ed/6/">
            {t.archive.items.ed_6}
          </ExternalLink>
        </Item>
        <Item>
          <ExternalLink href="https://shiftpsh.com/ed/5/">
            {t.archive.items.ed_5}
          </ExternalLink>
        </Item>
      </Itemize>
      <Space h={160} />
    </MainContainer>
  );
};

export default Page;
