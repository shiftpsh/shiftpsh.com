import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import GlobalStyle from '../styles/GlobalStyle'
import { Light } from '../styles/ShiftTheme'

const ShiftApp = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name="theme-color" content="#ff3b57" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>shift* / Suhyun Park</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shiftpsh" />
        <meta name="twitter:creator" content="@shiftpsh" />
        <meta name="twitter:title" content="shift* / Suhyun Park" />
        <meta
          name="twitter:description"
          content="Creation in a New Dimension."
        />
        <meta name="twitter:image" content="/res/card.png" />

        <link
          rel="stylesheet"
          href="//cloud.typography.com/6794156/6837792/css/fonts.css"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/icon?family=Material+Icons"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-96197390-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              
            gtag('config', 'UA-96197390-1');
            `,
          }}
        />
      </Head>
      <Reset />
      <ThemeProvider theme={Light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default ShiftApp
