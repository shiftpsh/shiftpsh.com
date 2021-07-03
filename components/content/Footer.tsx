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
