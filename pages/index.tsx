import { NextPage } from 'next'
import { isIE } from 'react-device-detect'

import TopNavigation from '../components/TopNavigation'
import UnsupportedBrowserSnackbar from '../components/UnsupportedBrowserSnackbar'
import ShiftTitle from '../components/content/ShiftTitle'

const Home: NextPage = () => {
  return (
    <>
      <TopNavigation />
      <ShiftTitle />
      {isIE ? <UnsupportedBrowserSnackbar /> : null}
    </>
  )
}

export default Home
