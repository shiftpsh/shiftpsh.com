import React from 'react'
import ContentPadding from '../../layouts/ContentPadding'
import FullHeightPage from '../../layouts/FullHeightPage'
import Caption from '../Caption'
import OuterLink from '../OuterLink'
import Space from '../Space'
import Subcaption from '../Subcaption'

const ShiftTitle: React.FC = () => {
  return (
    <>
      <FullHeightPage>
        <ContentPadding>
          <Subcaption>Suhyun Park</Subcaption>
          <Caption content={'Creation in\na New Dimension'} />
          <Space h={64} />
          <p>
            <b>박수현</b>
            <br />
            소프트웨어 엔지니어 (전){' '}
            <OuterLink href="https://company.nexon.com">
              NGINE STUDIOS / NEXON COMPANY
            </OuterLink>
            <br />
            그래픽 디자이너
            <br />
            <OuterLink href="https://cs.sogang.ac.kr">
              서강대학교 컴퓨터공학과
            </OuterLink>{' '}
            학부과정
          </p>
        </ContentPadding>
      </FullHeightPage>
    </>
  )
}

export default ShiftTitle
