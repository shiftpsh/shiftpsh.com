import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import { Light } from '../styles/ShiftTheme'

const ShiftApp = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={Light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default ShiftApp
