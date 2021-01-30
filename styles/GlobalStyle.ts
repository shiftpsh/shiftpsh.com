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
    line-height: 1.5;
  }
  
  /* TODO move to ShiftTheme */
  .tabular {
    font-family: 'Gotham SSm Tabular A', 'Gotham SSm Tabular B', 'Noto Sans KR',
      'NanumGothic', '나눔고딕', 'Malgun Gothic', '맑은 고딕', sans-serif;
  }
  
  body {
    width: 100%;
    overflow-x: hidden;
  }
  
  b {
    font-weight: 600;
  }
  
  strike {
    opacity: 0.5;
  }
  
  a:link, a:visited {
    color: ${({ theme }) => theme.shiftPink.toString()};
  }
  
`

export default GlobalStyle
