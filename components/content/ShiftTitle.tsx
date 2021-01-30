import styled from 'styled-components'
import ContentPadding from '../../layouts/ContentPadding'
import FullHeightPage from '../../layouts/FullHeightPage'
import Caption from '../Caption'

const Name = styled.div`
  font-size: smaller;
  font-weight: 600;
  letter-spacing: 0.2ch;
  margin-bottom: 32px;
`

const MainParagraph = styled.p`
  margin-top: 64px;
`

const ShiftTitle: React.FC = (props) => {
  return (
    <>
      <FullHeightPage>
        <ContentPadding>
          <Name>SUHYUN PARK</Name>
          <Caption content={'Creation in\na New Dimension'} />
          <MainParagraph>
            <b>박수현</b>
            <br />
            소프트웨어 엔지니어 @ NGINE STUDIOS / NEXON COMPANY
            <br />
            그래픽 디자이너
            <br />
            서강대학교 컴퓨터공학과 학부과정
          </MainParagraph>
        </ContentPadding>
      </FullHeightPage>
    </>
  )
}

export default ShiftTitle
