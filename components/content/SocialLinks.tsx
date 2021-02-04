import Color from 'color'
import React from 'react'
import styled from 'styled-components'
import ContentPadding from '../../layouts/ContentPadding'
import LinkItem from '../../types/LinkItem'
import Article from '../Article'
import Caption from '../Caption'
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
  {
    id: 'codeforces',
    caption: 'Codeforces',
    description: 'shiftpsh',
    color: new Color('#0084cb'),
    href: 'https://codeforces.com/profile/shiftpsh',
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

const SocialLinks: React.FC = () => {
  return (
    <>
      <ContentPadding>
        <Subcaption>Links</Subcaption>
        <Caption content={'이제 인터넷으로도\n만나실 수 있습니다'} />
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
    </>
  )
}

export default SocialLinks
