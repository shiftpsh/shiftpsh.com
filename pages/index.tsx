import { NextPage } from 'next'
import { isIE } from 'react-device-detect'

import TopNavigation from '../components/TopNavigation'
import UnsupportedBrowserSnackbar from '../components/UnsupportedBrowserSnackbar'

const Home: NextPage = () => {
  return (
    <>
      <TopNavigation />
      {isIE ? <UnsupportedBrowserSnackbar /> : null}
    </>
  )
}

export default Home
