"use client";

import { Divider, Space, Typo } from "@solved-ac/ui-react";
import {
  IconArrowsUpDown,
  IconArticle,
  IconAt,
  IconBalloon,
  IconBrandBehance,
  IconBrandBluesky,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNpm,
  IconBrandSteam,
  IconBrandThreads,
  IconBrandTwitter,
  IconBrandVsco,
  IconBrandYoutube,
  IconCheck,
  IconSquareLetterC,
  IconTrophy,
} from "@tabler/icons-react";
import { DynamicProfile } from "../../dynamicProfile/load";
import useTranslation from "../../hooks/useTranslation";
import { translations } from "./translations";
import LinkItemAtCoderAlgo from "./(external)/LinkItemAtCoderAlgo";
import LinkItemBaekjoon from "./(external)/LinkItemBaekjoon";
import LinkItemCodeforces from "./(external)/LinkItemCodeforces";
import LinkItemSolvedac from "./(external)/LinkItemSolvedac";
import LinkItemStackOverflow from "./(external)/LinkItemStackOverflow";
import LinkItemTopcoder from "./(external)/LinkItemTopcoder";
import { EmailLinkItem, LinkItem } from "./LinkItem";
import { Links } from "./Links";

interface Props {
  profile: DynamicProfile;
}

const ClientPage = ({ profile }: Props) => {
  const { t } = useTranslation(translations);

  const {
    atcoderAlgo,
    baekjoon,
    codeforces,
    stackOverflow,
    solvedac,
    topcoder,
  } = profile;

  return (
    <>
      <Typo h2>{t.links}</Typo>
      <Links>
        <EmailLinkItem
          icon={<IconAt />}
          caption={t.site.email_me}
          src="/img/email.svg"
          email="me@shiftpsh.com"
          color="#fe0c50"
        />
        <EmailLinkItem
          icon={<IconAt />}
          caption={t.site.email_shift}
          src="/img/email-solvedac.svg"
          email="shift@solved.ac"
          color="#17ce3a"
        />
        <LinkItem
          icon={<IconBrandTwitter />}
          caption="X (Twitter)"
          description="@shiftpsh"
          href="https://twitter.com/shiftpsh"
          color="#1da1f2"
        />
        <LinkItem
          icon={<IconBrandDiscord />}
          caption="Discord"
          description="shiftpsh"
          href="https://discord.com/users/198718670979989504"
          color="#5865f2"
        />
        <LinkItem
          icon={<IconBrandGithub />}
          caption="GitHub"
          description="shiftpsh"
          href="https://github.com/shiftpsh"
          color="#333333"
        />
      </Links>
      <Typo h2>{t.sites_services}</Typo>
      <Links>
        <LinkItem
          icon={<IconArticle />}
          caption={t.site.blog}
          description="blog.shift.moe"
          href="https://blog.shift.moe"
          color="#fe0c50"
        />
        <LinkItem
          icon={<IconCheck />}
          caption="solved.ac"
          description="solved.ac"
          href="https://solved.ac"
          color="#17ce3a"
        />
        <LinkItem
          icon={
            <IconBrandVsco
              style={{
                transform: `rotate(${45 / 2}deg)`,
              }}
            />
          }
          caption="maishift"
          description="mai.sft.sh"
          href="https://mai.sft.sh"
          color="#42bbcc"
        />
      </Links>
      <Divider />
      <Typo h2>{t.links_all.caption}</Typo>
      <Typo description>{t.links_all.disclaimer}</Typo>
      <Space h="1em" />
      <Typo h3>{t.sns}</Typo>
      <Links>
        <LinkItem
          icon={<IconBrandBluesky />}
          caption="Bluesky"
          description="@shiftp.sh"
          href="https://bsky.app/profile/shiftp.sh"
          color="#0077b5"
        />
        <LinkItem
          icon={<IconBrandLinkedin />}
          caption="LinkedIn"
          description="shiftpsh"
          href="https://www.linkedin.com/in/shiftpsh"
          color="#0077b5"
        />
        <LinkItem
          icon={<IconBrandFacebook />}
          caption="Facebook"
          description="shiftpsh"
          href="https://facebook.com/shiftpsh"
          color="#1877f2"
        />
        <LinkItem
          icon={<IconBrandInstagram />}
          caption="Instagram"
          description="@shiftpsh"
          href="https://instagram.com/shiftpsh"
          color="#c13584"
        />
        <LinkItem
          icon={<IconBrandThreads />}
          caption="Threads"
          description="@shiftpsh"
          href="https://www.threads.net/@shiftpsh"
          color="#c13584"
        />
        <LinkItem
          icon={<IconBrandYoutube />}
          caption="YouTube"
          description="shiftpsh"
          href="https://www.youtube.com/c/shiftpsh"
          color="#ff0000"
        />
        <LinkItem
          icon={<IconBrandSteam />}
          caption="Steam"
          description="shiftpsh"
          href="https://steamcommunity.com/id/shiftpsh"
          color="#00adee"
        />
      </Links>
      <Typo h3>{t.programming_tech}</Typo>
      <Links>
        <LinkItem
          icon={<IconBrandNpm />}
          caption="npm"
          description="shiftpsh"
          href="https://www.npmjs.com/~shiftpsh"
          color="#cb3837"
        />
        <LinkItemStackOverflow stackOverflow={stackOverflow} />
      </Links>
      <Typo h3>{t.competitive_programming}</Typo>
      <Links>
        <LinkItem
          icon={<IconBalloon />}
          caption="ICPCID"
          description="Suhyun Park"
          href="https://icpc.global/ICPCID/2ALMJW44APYS"
          color="#2f83c9"
        />
        <LinkItem
          icon={<IconTrophy />}
          caption="CP Hall of Fame"
          description="Suhyun Park"
          href="https://cphof.org/profile/codeforces:shiftpsh"
          color="#083358"
        />
        <LinkItem
          icon={<IconArrowsUpDown />}
          caption="CLIST"
          description="shiftpsh"
          href="https://clist.by/coder/shiftpsh"
          color="#0057b8"
        />
        <LinkItemBaekjoon baekjoon={baekjoon} />
        <LinkItemSolvedac solvedac={solvedac} />
        <LinkItemCodeforces codeforces={codeforces} />
        <LinkItemAtCoderAlgo atcoderAlgo={atcoderAlgo} />
        <LinkItemTopcoder topcoder={topcoder} />
        <LinkItem
          icon={<IconSquareLetterC />}
          caption="CodeUp"
          description="shiftpsh"
          href="https://codeup.kr/userinfo.php?user=shiftpsh"
          color="#1f8ac0"
        />
      </Links>
      <Typo h3>{t.graphic_design}</Typo>
      <Links>
        <LinkItem
          icon={<IconBrandBehance />}
          caption="Behance"
          description="shiftpsh"
          href="https://www.behance.net/shiftpsh"
          color="#0057ff"
        />
      </Links>
    </>
  );
};

export default ClientPage;
