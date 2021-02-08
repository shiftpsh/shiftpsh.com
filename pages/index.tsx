import { NextPage, NextPageContext } from 'next'
import { createMocks } from 'node-mocks-http'
import React from 'react'
import { isIE } from 'react-device-detect'
import Background from '../components/Background'
import Footer from '../components/content/Footer'
import ShiftAsADesigner from '../components/content/ShiftAsADesigner'
import ShiftAsADeveloper from '../components/content/ShiftAsADeveloper'
import ShiftTitle from '../components/content/ShiftTitle'
import SocialLinks from '../components/content/SocialLinks'
import Space from '../components/Space'
import TopNavigation from '../components/TopNavigation'
import UnsupportedBrowserSnackbar from '../components/UnsupportedBrowserSnackbar'
import ClientMapEntry from '../types/ClientMapEntry'
import GetAll from './api/table/get_all'

const Home: NextPage<{ map: ClientMapEntry[] }> = (props) => {
  return (
    <>
      <Background />
      <TopNavigation />
      <div style={{ position: 'relative', zIndex: 500 }}>
        <ShiftTitle />
        <ShiftAsADeveloper map={props.map} />
        <Space h="8em" />
        <ShiftAsADesigner />
        <Space h="8em" />
        <SocialLinks map={props.map} />
        <Space h="8em" />
        <Footer />
        <Space h="4em" />
      </div>
      {isIE ? <UnsupportedBrowserSnackbar /> : null}
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, res } = createMocks({ method: 'GET' })
  await GetAll(req, res)

  if (res._getStatusCode() !== 200) return { props: { map: [] } }

  try {
    return { props: { map: JSON.parse(res._getData()).result } }
  } catch (e) {
    return { props: { map: [] } }
  }
}

export default Home
