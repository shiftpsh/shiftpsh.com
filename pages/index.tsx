import { NextPage } from 'next'
import { isIE } from 'react-device-detect'
import Background from '../components/Background'
import ShiftTitle from '../components/content/ShiftTitle'
import TopNavigation from '../components/TopNavigation'
import UnsupportedBrowserSnackbar from '../components/UnsupportedBrowserSnackbar'

const Home: NextPage = () => {
  return (
    <>
      <Background />
      <TopNavigation />
      <ShiftTitle />
      {isIE ? <UnsupportedBrowserSnackbar /> : null}
    </>
  )
}

export default Home
