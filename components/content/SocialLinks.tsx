import Color from 'color'
import React from 'react'
import styled from 'styled-components'
import ContentPadding from '../../layouts/ContentPadding'
import ClientMapEntry from '../../types/ClientMapEntry'
import LinkItem from '../../types/LinkItem'
import {
  atcoderColor,
  codeforcesColor,
  maimaiTitleColor,
  sdvxColor,
  topcoderColor,
} from '../../utils/Color'
import {
  atcoderTitle,
  codeforcesTitle,
  numberFormat,
  topcoderTitle,
} from '../../utils/Formatting'
import Article from '../Article'
import Caption from '../Caption'
import Description from '../Descrption'
import GameIcon from '../GameIcon'
import Label from '../Label'
import LinkComponent from '../LinkComponent'
import Space from '../Space'
import Subcaption, { Subsubcaption } from '../Subcaption'

const MapleCharacter = styled.img`
  position: absolute;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  width: 12em;
  height: 12em;
  right: -3em;
  top: calc(-50% - 0.3em);
  pointer-events: none;
`

const services: LinkItem[] = [
  {
    id: 'solvedac',
    caption: 'solved.ac',
    description: 'BOJ 문제 난이도 제공',
    color: new Color('#17ce3a'),
    href: 'https://solved.ac',
  },
  {
    id: 'asksftsh',
    caption: 'ask*',
    description: '트위터 한정 익명 질문',
    color: new Color('#ff3b57'),
    href: 'https://ask.shiftp.sh',
  },
]

const social: LinkItem[] = [
  {
    id: 'mail',
    caption: '이메일',
    color: new Color('#fe0c50'),
    address: 'me|shiftpsh.com',
    type: 'mail',
  },
  {
    id: 'blog',
    caption: '블로그',
    description: 'blog.shift.moe',
    color: new Color('#ffb300'),
    href: 'https://blog.shift.moe',
  },
  {
    id: 'twitter',
    caption: '트위터',
    description: '@shiftpsh',
    color: new Color('#38a1f2'),
    href: 'https://twitter.com/shiftpsh',
  },
  {
    id: 'asksftsh',
    caption: 'ask*',
    description: '@shiftpsh',
    color: new Color('#ff3b57'),
    href: 'https://ask.shiftp.sh/shiftpsh',
  },
  {
    id: 'facebook',
    caption: 'Facebook',
    description: 'shiftpsh',
    color: new Color('#3b5997'),
    href: 'https://facebook.com/shiftpsh',
  },
  {
    id: 'instagram',
    caption: 'Instagram',
    description: '@shiftpsh',
    color: new Color('#dd2a7b'),
    href: 'https://instagram.com/shiftpsh',
  },
  {
    id: 'github',
    caption: 'GitHub',
    description: 'shiftpsh',
    color: new Color('#333333'),
    href: 'https://github.com/shiftpsh',
  },
  {
    id: 'stackoverflow',
    caption: 'StackOverflow',
    description: 'shiftpsh',
    color: new Color('#f48023'),
    href: 'https://stackoverflow.com/users/2688304/shiftpsh',
  },
  {
    id: 'npm',
    caption: 'npm',
    description: '@shiftpsh',
    color: new Color('#cb3837'),
    href: 'https://www.npmjs.com/~shiftpsh',
  },
  {
    id: 'behance',
    caption: 'Behance',
    description: 'shiftpsh',
    color: new Color('#1768ff'),
    href: 'https://www.behance.net/shiftpsh',
  },
  {
    id: 'boj',
    caption: 'Baekjoon OJ',
    description: 'shiftpsh',
    color: new Color('#0377c6'),
    href: 'https://www.acmicpc.net/user/shiftpsh',
  },
  {
    id: 'solvedac',
    caption: 'solved.ac',
    description: 'shiftpsh',
    color: new Color('#17ce3a'),
    href: 'https://solved.ac/profile/shiftpsh',
  },
]

const competitiveProgramming = (map: Map<string, string>) =>
  [
    {
      id: 'icpc',
      caption: 'ICPCID',
      description: <>Suhyun Park</>,
      color: new Color('#2f83c9'),
      href: 'https://icpc.global/ICPCID/2ALMJW44APYS',
    },
    {
      id: 'cphof',
      caption: 'CP Hall of Fame',
      description: <>Suhyun Park</>,
      color: new Color('#083358'),
      href: 'https://cphof.org/profile/codeforces:shiftpsh',
    },
    {
      id: 'codeforces',
      caption: 'Codeforces',
      description: (
        <>
          {map.has('cf_rating') ? (
            <>
              <Label color={codeforcesColor(+map.get('cf_rating')!)}>
                {codeforcesTitle(+map.get('cf_rating')!)}
              </Label>{' '}
            </>
          ) : null}
          shiftpsh
          {map.has('cf_rating_highest') && map.has('cf_rating') ? (
            <>
              <br />
              <Description>
                <span
                  style={{
                    color: codeforcesColor(+map.get('cf_rating')!).toString(),
                  }}
                >
                  {map.get('cf_rating')!}
                </span>{' '}
                {map.has('cf_rank') && map.has('cf_total_user_count') ? (
                  <>
                    {numberFormat(
                      (+map.get('cf_rank')! /
                        +map.get('cf_total_user_count')!) *
                        100,
                      2
                    )}
                    %{' '}
                  </>
                ) : null}
                / max.{' '}
                <Label color={codeforcesColor(+map.get('cf_rating_highest')!)}>
                  {codeforcesTitle(+map.get('cf_rating_highest')!)}
                </Label>{' '}
                <span
                  style={{
                    color: codeforcesColor(
                      +map.get('cf_rating_highest')!
                    ).toString(),
                  }}
                >
                  {map.get('cf_rating_highest')!}
                </span>
              </Description>
            </>
          ) : null}
        </>
      ),
      color: new Color('#0084cb'),
      href: 'https://codeforces.com/profile/shiftpsh',
    },
    {
      id: 'atcoder',
      caption: 'AtCoder',
      description: (
        <>
          {map.has('ac_rating_highest') ? (
            <>
              <Label color={atcoderColor(+map.get('ac_rating_highest')!)}>
                {atcoderTitle(+map.get('ac_rating_highest')!)}
              </Label>{' '}
            </>
          ) : null}
          shiftpsh
          {map.has('ac_rating_highest') && map.has('ac_rating') ? (
            <>
              <br />
              <Description>
                <span
                  style={{
                    color: atcoderColor(+map.get('ac_rating')!).toString(),
                  }}
                >
                  {map.get('ac_rating')!}
                </span>{' '}
                {map.has('ac_rank') && map.has('ac_total_user_count') ? (
                  <>
                    {numberFormat(
                      (+map.get('ac_rank')! /
                        +map.get('ac_total_user_count')!) *
                        100,
                      2
                    )}
                    %{' '}
                  </>
                ) : null}
                / max.{' '}
                <span
                  style={{
                    color: atcoderColor(
                      +map.get('ac_rating_highest')!
                    ).toString(),
                  }}
                >
                  {map.get('ac_rating_highest')!}
                </span>
              </Description>
            </>
          ) : null}
        </>
      ),
      color: new Color('#2d2d2d'),
      href: 'https://atcoder.jp/users/shiftpsh',
    },
    {
      id: 'topcoder',
      caption: 'TopCoder',
      description: (
        <>
          {map.has('tc_rating') ? (
            <>
              <Label color={topcoderColor(+map.get('tc_rating')!)}>
                {topcoderTitle(+map.get('tc_rating')!)}
              </Label>{' '}
            </>
          ) : null}
          shiftpsh
          {map.has('tc_rating') ? (
            <>
              <br />
              <Description>
                <span
                  style={{
                    color: topcoderColor(+map.get('tc_rating')!).toString(),
                  }}
                >
                  {map.get('tc_rating')!}
                </span>
              </Description>
            </>
          ) : null}
        </>
      ),
      color: new Color('#27aae1'),
      href: 'https://www.topcoder.com/members/shiftpsh/details/?track=DATA_SCIENCE&subTrack=SRM',
    },
  ] as LinkItem[]

const games = (map: Map<string, string>) =>
  [
    {
      id: 'steam',
      caption: 'Steam',
      description: 'shiftpsh',
      color: new Color('#00adee'),
      href: 'https://steamcommunity.com/id/shiftpsh/',
    },
    {
      id: 'games/dmrv',
      iconFormat: 'png',
      caption: 'DJMAX RESPECT V',
      description: (
        <>
          shiftpsh
          {map.has('djmax_description') ? (
            <>
              <br />
              <Description>{map.get('djmax_description')!}</Description>
            </>
          ) : null}
        </>
      ),
      color: new Color('#b64768'),
    },
    {
      id: 'games/maple',
      iconFormat: 'png',
      caption: '메이플스토리',
      description: (
        <>
          싶프트<Description>@오로라</Description>
          <br />
          <Description>
            {map.has('maple_level')
              ? `Lv ${map.get('maple_level')!} / 아크`
              : `아크`}
          </Description>
          {map.has('maple_character_image') ? (
            <MapleCharacter
              src={map.get('maple_character_image')!}
              alt="싶프트 메이플스토리 캐릭터 이미지"
            />
          ) : null}
        </>
      ),
      href: 'https://maple.gg/u/%EC%8B%B6%ED%94%84%ED%8A%B8',
      color: new Color('#ff9d00'),
    },
  ] as LinkItem[]

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
  grid-auto-rows: 10em;
  place-items: left start;
  justify-content: space-around;
  gap: 2em 1em;
`

const GamesContainer = styled.div`
  overflow-x: auto;
`

interface Props {
  map: ClientMapEntry[]
}

const SocialLinks: React.FC<Props> = (props) => {
  const map = new Map(props.map.map(({ key, value }) => [key, value]))

  return (
    <>
      <ContentPadding>
        <Subcaption>Links</Subcaption>
        <Caption content={'이제 인터넷에서도\n만나실 수 있습니다'} />
        <Space h={64} />
        <Space h="2em" />
        <Subsubcaption>Services</Subsubcaption>
        <Article>
          <LinksContainer>
            {services.map((l, i) => (
              <LinkComponent key={i} link={l} />
            ))}
          </LinksContainer>
        </Article>
        <Space h="2em" />
        <Subsubcaption>Social</Subsubcaption>
        <Article>
          <LinksContainer>
            {social.map((l, i) => (
              <LinkComponent key={i} link={l} />
            ))}
          </LinksContainer>
        </Article>
      </ContentPadding>
      <ContentPadding>
        <Space h="2em" />
        <Subsubcaption>Competitive Programming</Subsubcaption>
      </ContentPadding>
      <Article>
        <GamesContainer>
          <div>
            {competitiveProgramming(map).map((l, i) => (
              <GameIcon key={i} link={l} />
            ))}
          </div>
        </GamesContainer>
      </Article>
      <ContentPadding>
        <Space h="2em" />
        <Subsubcaption>Games</Subsubcaption>
      </ContentPadding>
      <Article>
        <GamesContainer>
          <div>
            {games(map).map((l, i) => (
              <GameIcon key={i} link={l} />
            ))}
          </div>
        </GamesContainer>
      </Article>
    </>
  )
}

export default SocialLinks
