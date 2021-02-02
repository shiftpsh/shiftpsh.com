import React from 'react'
import styled from 'styled-components'
import ContentPadding from '../../layouts/ContentPadding'
import FullHeightPage from '../../layouts/FullHeightPage'
import Caption from '../Caption'
import Space from '../Space'
import LeftTimeDisplay from './LeftTimeDisplay'

const Name = styled.div`
  font-size: smaller;
  font-weight: 600;
  letter-spacing: 0.2ch;
  margin-bottom: 32px;
`

const ShiftTitle: React.FC = () => {
  return (
    <>
      <FullHeightPage>
        <ContentPadding>
          <Name>SUHYUN PARK</Name>
          <Caption content={'Creation in\na New Dimension'} />
          <Space h={64} />
          <p>
            <b>박수현</b>
            <br />
            소프트웨어 엔지니어 @ NGINE STUDIOS / NEXON COMPANY
            <br />
            그래픽 디자이너
            <br />
            서강대학교 컴퓨터공학과 학부과정
          </p>
          <Space h="1em" />
          <LeftTimeDisplay />
        </ContentPadding>
      </FullHeightPage>
    </>
  )
}

export default ShiftTitle
