import { AppProps } from 'next/app'

const HomepageApp = (props: AppProps) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default HomepageApp
