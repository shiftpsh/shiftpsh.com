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

const ShiftAsADeveloper: React.FC = () => {
  const [state, setState] = useState<State>({
    detailsShown: false,
  })

  return (
    <>
      <ContentPadding>
        <Subcaption>Programming</Subcaption>
        <Caption content={'지금까지 연 중괄호 수는\n기억 못 하고 있습니다'} />
        <Space h={64} />
        <Article>
          프로그래머입니다. 여기저기서 돌아가는 프로그램을 만듭니다.
          <br />
          검은 화면에 흰색 글씨만 나오는 심심해 보이는 프로그램부터 스마트폰에서
          돌아가는 앱과 게임, 브라우저에서 돌아가는 홈페이지나 웹 앱, 지구
          어딘가에서 열심히 돌아가는 서버도 만듭니다.
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
        <Subsubcaption>Work Experiences</Subsubcaption>
        <ProfileList>
          <li>
            <OuterLink href="https://company.nexon.com">
              <b>NGINE STUDIOS / NEXON COMPANY</b>
            </OuterLink>{' '}
            소프트웨어 엔지니어<Descrption>, 2020. 6 &ndash;</Descrption>
          </li>
          <Collapse shown={state.detailsShown} as="li">
            테스트
          </Collapse>
          <li>
            <OuterLink href="https://hyperconnect.com/">
              <b>HYPERCONNECT</b>
            </OuterLink>{' '}
            소프트웨어 엔지니어 (인턴)
            <Descrption>, 2018. 6 &ndash; 2018. 8</Descrption>
          </li>
        </ProfileList>
        <Subsubcaption>Education</Subsubcaption>
        <ProfileList>
          <li>
            <OuterLink href="https://cs.sogang.ac.kr">
              <b>서강대학교 컴퓨터공학과</b>
            </OuterLink>{' '}
            학부 18학번<Descrption>, 2018. 3 &ndash; (휴학)</Descrption>
          </li>
        </ProfileList>
        <Subsubcaption>Honors and Awards</Subsubcaption>
        <ProfileList>
          <li>
            <b>
              2019{' '}
              <OuterLink href="http://icpckorea.org">
                ICPC Asia Seoul Regional
              </OuterLink>{' '}
              Contest
            </b>{' '}
            8<sup>th</sup> place<Descrption>, 2019. 11. 9</Descrption>
          </li>
          <li>
            <b>
              <OuterLink href="https://research.samsung.com/scpc">
                Samsung Collegiate Programming Cup
              </OuterLink>{' '}
              2020
            </b>{' '}
            Finalist<Descrption>, 2020. 11. 7</Descrption>
          </li>
          <li>
            <b>
              <OuterLink href="https://research.samsung.com/scpc">
                Samsung Collegiate Programming Cup
              </OuterLink>{' '}
              2019
            </b>{' '}
            Finalist<Descrption>, 2019. 7. 30</Descrption>
          </li>
        </ProfileList>
        <Subsubcaption>Other Experiences</Subsubcaption>
        <ProfileList>
          <li>
            <OuterLink href="https://ucpc.me">
              <b>전국 대학생 프로그래밍 대회 동아리 연합</b>
            </OuterLink>{' '}
            前 회장<Descrption>, 2020. 4 &ndash; 2021. 1</Descrption>
          </li>
          <li>
            <OuterLink href="https://acm.sogang.ac.kr">
              <b>Sogang ICPC Team</b>
            </OuterLink>{' '}
            前 학회장<Descrption>, 2019. 1 &ndash; 2019. 12</Descrption>
          </li>
          <li>
            <OuterLink href="https://solved.ac">
              <b>solved.ac</b>
            </OuterLink>{' '}
            기획, 운영 및 개발<Descrption>, 2019. 6 &ndash;</Descrption>
          </li>
          <li>
            <OuterLink href="https://codeforces.com/profile/shiftpsh">
              Codeforces
            </OuterLink>{' '}
            최고 레이팅 2,117
          </li>
          <li>알고리즘 문제해결 대회 다수 출제 및 검수</li>
        </ProfileList>
      </ContentPadding>
    </>
  )
}

export default ShiftAsADeveloper
