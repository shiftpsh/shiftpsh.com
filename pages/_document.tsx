import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { Reset } from 'styled-reset'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="theme-color" content="#ff3b57" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes, maximum-scale=5"
          />
          <meta
            name="description"
            content="Software Engineer @ Nexon Company, Graphic Designer, Undergraduate Student at Sogang University"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>shiftpsh / Suhyun Park</title>

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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
