import React, { useState } from 'react'
import ContentPadding from '../../layouts/ContentPadding'
import Article from '../Article'
import Button from '../Button'
import Caption from '../Caption'
import Collapse from '../Collapse'
import Descrption from '../Descrption'
import OuterLink from '../OuterLink'
import ProfileList from '../ProfileList'
import Space from '../Space'
import Subcaption, { Subsubcaption } from '../Subcaption'

interface State {
  detailsShown: boolean
}

// TODO move contents to markdown etc

const ShiftAsADesigner: React.FC = () => {
  const [state, setState] = useState<State>({
    detailsShown: false,
  })

  return (
    <>
      <ContentPadding>
        <Subcaption>Graphic Design</Subcaption>
        <Caption content={'홈페이지-최종-수정-\n진짜최종.psd'} />
        <Space h={64} />
        <Article>
          <p>그래픽 디자이너입니다. 보이는 것을 만듭니다.</p>
          <p>
            복도와 게시판 이곳저곳에 붙일 포스터에서 시작해 로고도 만들고,
            이모티콘도 만들고, 단순히 보이는 것을 넘어 사용자와 상호작용하는
            웹사이트나 앱의 유저 경험을 만듭니다.
          </p>
        </Article>
        <Button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              detailsShown: !prevState.detailsShown,
            }))
          }}
        >
          {state.detailsShown ? '전체 이력 숨기기' : '전체 이력 보기'}
        </Button>
        <Space h={32} />
        <Article>
          <Subsubcaption>Works</Subsubcaption>
          <ProfileList>
            <li>
              카카오 이모티콘샵{' '}
              <OuterLink href="https://e.kakao.com/t/cool-for-nothing">
                <b>쓸데없이 멋진 답장</b>
              </OuterLink>{' '}
              1, 2 작가<Descrption>, 2018</Descrption>
              <Collapse shown={state.detailsShown}>
                <p>
                  일간 최고 판매량 6위(10-20대 일간 최고 판매량 2위)를
                  기록했습니다.
                </p>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="https://solved.ac">
                <b>solved.ac</b>
              </OuterLink>{' '}
              UI/UX 설계 및 디자인<Descrption>, 2019 &ndash;</Descrption>
              <Collapse shown={state.detailsShown}>
                <p>
                  개인 프로젝트{' '}
                  <OuterLink href="https://solved.ac">solved.ac</OuterLink>의
                  UI/UX를 설계하고,{' '}
                  <OuterLink href="https://twitter.com/solved_ac">
                    SNS 공식 계정
                  </OuterLink>{' '}
                  등에 사용되는 그래픽을 직접 제작했습니다.
                </p>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="http://2020.ucpc.me">
                <b>UCPC 2020</b>
              </OuterLink>{' '}
              로고, 삽화 제작, 조판, 웹 디자인<Descrption>, 2020</Descrption>
            </li>
            <li>
              <OuterLink href="https://acm.sogang.ac.kr">
                <b>Sogang ICPC Team</b>
              </OuterLink>{' '}
              로고, 웹 디자인<Descrption>, 2019</Descrption>
            </li>
            <li>
              <OuterLink href="https://shiftpsh.com/ed/7/">
                <b>THE SHIFTED PROJECT</b>
              </OuterLink>{' '}
              게임 스킨 및 영상 디자인<Descrption>, 2016</Descrption>
            </li>
            <li>
              <Collapse shown={state.detailsShown}>
                <Space h="2em" />
              </Collapse>
              프로그래밍 대회에서 포스터 디자인, 삽화 제작 및 조판
              <Collapse shown={state.detailsShown}>
                <ProfileList>
                  <li>
                    <b>SUAPC 2021w</b> 신촌지역 대학생 프로그래밍 대회 동아리
                    연합 대회
                  </li>
                  <li>
                    <b>SPC 2020</b> 서강대학교 프로그래밍 대회
                  </li>
                  <li>
                    <OuterLink href="http://2020.ucpc.me">
                      <b>UCPC 2020</b>
                    </OuterLink>{' '}
                    전국 대학생 프로그래밍 대회 동아리 연합 대회
                  </li>
                  <li>
                    <b>SUAPC 2020</b> 신촌지역 대학생 프로그래밍 대회 동아리
                    연합 대회
                  </li>
                  <li>
                    <b>SPC 2019</b> 서강대학교 프로그래밍 대회
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              커뮤니티 또는 행사에서 로고 및 포스터 디자인
              <Collapse shown={state.detailsShown}>
                <ProfileList>
                  <li>
                    <OuterLink href="https://www.facebook.com/theSogangComputerClub/">
                      <b>SGCC</b>
                    </OuterLink>{' '}
                    Sogang Computer Club &ndash; 서강대학교 중앙 컴퓨터 동아리
                  </li>
                  <li>
                    <b>Local Optima</b> 서강대학교 컴퓨터공학과 학회 Release
                    주최의 컴퓨터공학 세미나
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
          </ProfileList>
          <Space h="2em" />
        </Article>
      </ContentPadding>
    </>
  )
}

export default ShiftAsADesigner
