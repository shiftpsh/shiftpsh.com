import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import GlobalStyle from '../styles/GlobalStyle'
import { Light } from '../styles/ShiftTheme'

const ShiftApp = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <>
      <Reset />
      <ThemeProvider theme={Light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default ShiftApp
