import Color from 'color'
import React from 'react'
import styled from 'styled-components'
import ContentPadding from '../../layouts/ContentPadding'
import LinkItem from '../../types/LinkItem'
import Article from '../Article'
import Caption from '../Caption'
import Descrption from '../Descrption'
import GameIcon from '../GameIcon'
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

const competitiveProgramming: LinkItem[] = [
  {
    id: 'codeforces',
    caption: 'Codeforces',
    description: (
      <>
        shiftpsh
        <br />
        <Descrption>2117 / Master</Descrption>
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
        shiftpsh
        <br />
        <Descrption>1874 / 1級</Descrption>
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
        shiftpsh
        <br />
        <Descrption>1821</Descrption>
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
]

const games: LinkItem[] = [
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
        <br />
        <Descrption>DIAMOND IV @ PRE-SEASON</Descrption>
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
        <Descrption>Lv 233 / 아크</Descrption>
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
        shift* <Descrption>&mdash; 7061399728945</Descrption>
        <br />
        <Descrption>8743 / 九段</Descrption>
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
        SHIFT* <Descrption>&mdash; SV-7651-0707</Descrption>
        <br />
        <Descrption>19.03 / LV.∞ 蘭華</Descrption>
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
]

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
const SocialLinks: React.FC = () => {
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
            {competitiveProgramming.map((l, i) => (
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
            {games.map((l, i) => (
              <GameIcon key={i} link={l} />
            ))}
          </div>
        </GamesContainer>
      </Article>
    </>
  )
}

export default SocialLinks
