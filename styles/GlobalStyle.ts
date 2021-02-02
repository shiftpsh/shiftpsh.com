import { createGlobalStyle } from 'styled-components'
import { ShiftTheme } from './ShiftTheme'

const GlobalStyle = createGlobalStyle<{ theme: ShiftTheme }>`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ::selection {
    color: ${({ theme }) => theme.textColorInverted.toString()};
    background: ${({ theme }) => theme.textColor.alpha(0.5).toString()};
  }
  
  html {
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    color: ${({ theme }) => theme.textColor.toString()};
  
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    overflow-x: hidden;
    font-size: calc(10px + 0.7vmin);
    letter-spacing: -0.05ch;
  }
  
  /* TODO move to ShiftTheme */
  .tabular {
    font-family: 'Gotham SSm Tabular A', 'Gotham SSm Tabular B', 'Noto Sans KR',
      'NanumGothic', '나눔고딕', 'Malgun Gothic', '맑은 고딕', sans-serif;
  }
  
  body {
    width: 100%;
    overflow: hidden;
    line-height: 1.5;
  }
  
  b {
    font-weight: 600;
  }
  
  strike {
    opacity: 0.5;
  }
  
  a:link, a:visited {
    /* color: ${({ theme }) => theme.shiftPink.toString()}; */
    color: inherit;
    text-decoration: underline dashed 1px;
    transition: background .3s ease;
    &:hover {
      background: ${({ theme }) =>
        theme.shiftPink.mix(theme.backgroundColor, 0.5).toString()};
      text-decoration: underline solid 1px;
    }
  }

  sup {
    vertical-align: top;
    font-size: 0.6em;
  }
  
  sub {
    vertical-align: bottom;
    font-size: 0.6em;
  }
`

export default GlobalStyle
