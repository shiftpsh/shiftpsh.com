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
  topcoderColor
} from '../../utils/Color'
import {
  atcoderTitle,
  codeforcesTitle,
  topcoderTitle
} from '../../utils/Formatting'
import Article from '../Article'
import Caption from '../Caption'
import Descrption from '../Descrption'
import GameIcon from '../GameIcon'
import Label from '../Label'
import LinkComponent from '../LinkComponent'
import Space from '../Space'
import Subcaption, { Subsubcaption } from '../Subcaption'

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
]

const competitiveProgramming = (map: Map<string, string>) =>
  [
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
              <Descrption>
                <span
                  style={{
                    color: codeforcesColor(+map.get('cf_rating')!).toString(),
                  }}
                >
                  {map.get('cf_rating')!}
                </span>{' '}
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
              </Descrption>
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
              <Descrption>
                <span
                  style={{
                    color: atcoderColor(+map.get('ac_rating')!).toString(),
                  }}
                >
                  {map.get('ac_rating')!}
                </span>{' '}
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
              </Descrption>
            </>
          ) : null}
        </>
      ),
      color: new Color('#2d2d2d'),
      href: 'https://atcoder.jp/users/shiftpshh',
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
              <Descrption>
                <span
                  style={{
                    color: topcoderColor(+map.get('tc_rating')!).toString(),
                  }}
                >
                  {map.get('tc_rating')!}
                </span>
              </Descrption>
            </>
          ) : null}
        </>
      ),
      color: new Color('#27aae1'),
      href:
        'https://www.topcoder.com/members/shiftpsh/details/?track=DATA_SCIENCE&subTrack=SRM',
    },
    {
      id: 'icpc',
      caption: 'ICPCID',
      description: <>Suhyun Park</>,
      color: new Color('#2f83c9'),
      href: 'https://icpc.global/ICPCID/2ALMJW44APYS',
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
              <Descrption>{map.get('djmax_description')!}</Descrption>
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
          싶프트<Descrption>@오로라</Descrption>
          <br />
          <Descrption>
            {map.has('maple_level')
              ? `Lv ${map.get('maple_level')!} / 아크`
              : `아크`}
          </Descrption>
        </>
      ),
      href: 'https://maple.gg/u/%EC%8B%B6%ED%94%84%ED%8A%B8',
      color: new Color('#ff9d00'),
    },
    {
      id: 'games/maimai',
      iconFormat: 'png',
      caption: 'maimai DX+',
      description: (
        <>
          {map.has('maimai_class') ? (
            <>
              <Label color={maimaiTitleColor(map.get('maimai_class')!)}>
                {map.get('maimai_class')!}
              </Label>{' '}
            </>
          ) : null}
          shift* <Descrption>&mdash; 7061399728945</Descrption>
          {map.has('maimai_rating') ? (
            <>
              <br />
              <Descrption>DX RATING {map.get('maimai_rating')!}</Descrption>
            </>
          ) : null}
        </>
      ),
      color: new Color('#42bbcc'),
    },
    {
      id: 'games/sdvx',
      iconFormat: 'png',
      caption: 'SOUND VOLTEX',
      description: (
        <>
          {map.has('sdvx_class') ? (
            <>
              <Label color={sdvxColor(map.get('sdvx_class')!)}>
                {map.get('sdvx_class')!}
              </Label>{' '}
            </>
          ) : null}
          SHIFT* <Descrption>&mdash; SV-7651-0707</Descrption>
          {map.has('sdvx_rating') ? (
            <>
              <br />
              <Descrption>VOLFORCE {map.get('sdvx_rating')!}</Descrption>
            </>
          ) : null}
        </>
      ),
      href:
        'https://p.eagate.573.jp/game/sdvx/v/p/playdata/rival/profile.html?rival_id=SV-7651-0707',
      color: new Color('#f72675'),
    },
    {
      id: 'games/puroseka',
      iconFormat: 'png',
      caption: 'COLORFUL STAGE',
      description: (
        <>
          shift* <Descrption>&mdash; 5530735142670336</Descrption>
        </>
      ),
      color: new Color('#85d5e8'),
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
