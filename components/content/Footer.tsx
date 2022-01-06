import React from 'react'
import styled from 'styled-components'
import ContentPadding from '../../layouts/ContentPadding'
import Article from '../Article'
import OuterLink from '../OuterLink'
import Space from '../Space'

const Copyright = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  font-weight: bold;
  font-size: smaller;
`

const Sponsor = styled.img`
  width: 8em;
  height: 8em;
`

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <ContentPadding>
          <Article>
            GitHub{' '}
            <OuterLink href="https://github.com/shiftpsh/shiftpsh.com">
              shiftpsh/shiftpsh.com
            </OuterLink>
            과{' '}
            <OuterLink href="https://github.com/shiftpsh/shiftpsh.com-crawler">
              shiftpsh/shiftpsh.com-crawler
            </OuterLink>
            에서 이 사이트의 소스를 확인할 수 있습니다.
            <Space h="2em" />
            <OuterLink
              href="https://www.unicode.org/consortium/adopted-characters.html#b2303"
              style={{ background: 'inherit' }}
            >
              <Sponsor
                src="/res/bronze-2303.png"
                alt="Unicode Bronze Sponsor"
              />
            </OuterLink>
            <Space h="2em" />
            <Copyright>
              © 2019 – {new Date().getFullYear()}
              <br />
              Suhyun Park / Shift Design Co.
              <br />
              All rights reserved.
            </Copyright>
          </Article>
        </ContentPadding>
      </footer>
    </>
  )
}

export default Footer
