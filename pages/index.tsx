import { NextPage } from 'next'
import React from 'react'
import { isIE } from 'react-device-detect'
import Background from '../components/Background'
import ShiftAsADeveloper from '../components/content/ShiftAsADeveloper'
import ShiftTitle from '../components/content/ShiftTitle'
import TopNavigation from '../components/TopNavigation'
import UnsupportedBrowserSnackbar from '../components/UnsupportedBrowserSnackbar'

const Home: NextPage = () => {
  return (
    <>
      <Background />
      <TopNavigation />
      <div style={{ position: 'relative', zIndex: 500 }}>
        <ShiftTitle />
        <ShiftAsADeveloper />
      </div>
      {isIE ? <UnsupportedBrowserSnackbar /> : null}
    </>
  )
}

export default Home
