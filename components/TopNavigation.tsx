import styled from 'styled-components'
import ContentPadding from '../layouts/ContentPadding'
import { sizeUnder } from '../utils/Layout'

const TopNavigationContainer = styled(ContentPadding)`
  position: fixed;
  display: flex;
  align-items: center;
  top: 48px;
  right: 0;
  height: 48px;
  z-index: 1000;
`

const Logo = styled.img`
  display: block;
  height: 48px;
`

const TopLinkItem = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  font-weight: 600;
  margin-right: 2em;
  & a,
  & a:link,
  & a:visited {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
      background: none;
    }
  }
  ${sizeUnder.sm`
    display: none;
  `}
`

const TopNavigation: React.FC = (props) => {
  return (
    <TopNavigationContainer as="nav">
      <TopLinkItem>
        <a href="https://blog.shift.moe" rel="noopener noreferrer">
          Blog
        </a>
      </TopLinkItem>
      <TopLinkItem>
        <a href="https://twitter.com/shiftpsh" rel="noopener noreferrer">
          Twitter
        </a>
      </TopLinkItem>
      <TopLinkItem>
        <a href="https://github.com/shiftpsh" rel="noopener noreferrer">
          Github
        </a>
      </TopLinkItem>
      <a href="#" style={{ background: 'none' }}>
        <Logo src="/res/shiftpsh-logo-2019.svg" alt="shiftpsh Logo" />
      </a>
    </TopNavigationContainer>
  )
}

export default TopNavigation
