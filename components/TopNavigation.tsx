import styled from 'styled-components'
import { sizeUnder } from '../utils/Layout'

const TopNavigationContainer = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 32px;
  top: 48px;
  right: 64px;
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
  & a {
    color: inherit;
    text-decoration: none;
  }
  ${sizeUnder.sm`
    display: none;
  `}
`

const TopNavigation: React.FC = (props) => {
  return (
    <TopNavigationContainer>
      <TopLinkItem>
        <a href="https://blog.shift.moe" rel="noopener noreferrer">
          Blog
        </a>
      </TopLinkItem>
      <TopLinkItem>
        <a href="https://github.com/shiftpsh" rel="noopener noreferrer">
          Github
        </a>
      </TopLinkItem>
      <TopLinkItem>
        <a href="https://twitter.com/shiftpsh" rel="noopener noreferrer">
          Twitter
        </a>
      </TopLinkItem>
      <a href="#">
        <Logo src="/shiftpsh-logo-2019.svg" alt="shiftpsh Logo" />
      </a>
    </TopNavigationContainer>
  )
}

export default TopNavigation
