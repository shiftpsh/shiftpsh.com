import React from 'react'
import ContentPadding from '../../layouts/ContentPadding'
import FullHeightPage from '../../layouts/FullHeightPage'
import Button from '../Button'
import Caption from '../Caption'
import Description from '../Descrption'
import OuterLink from '../OuterLink'
import Space from '../Space'
import Subcaption from '../Subcaption'
import LeftTimeDisplay from './LeftTimeDisplay'

const katcFormData = {
  children_search_request_cnt: 1,
  'search:search_key1:child_search': 'etc_char8',
  'search:search_key2:child_search': 'etc_char9',
  'search:search_key3:child_search': 'etc_char1',
  search_val1: 'MjAyMjAyMTc=',
  search_val2: 'OTgwODA2',
  birthDay: '980806',
  search_val3: '박수현',
}

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
            소프트웨어 엔지니어 @{' '}
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
          <Space h="1em" />
          <p>
            산업기능요원으로 복무 중 &mdash;{' '}
            <LeftTimeDisplay
              startAt={new Date("2020-06-22T10:00:00+09:00")}
              endAt={new Date("2022-05-29T00:00:00+09:00")}
            />
          </p>
          {new Date() > new Date("2022-02-17T12:00:00+09:00") ? (
            <>
              <p>
                기초군사훈련 증 &mdash;{' '}
                <LeftTimeDisplay
                  startAt={new Date("2022-02-17T14:00:00+09:00")}
                  endAt={new Date("2022-03-10T14:00:00+09:00")}
                />{' '}
              </p>
              <Space h="1em" />
              <form
                target="_blank"
                method="post"
                action="https://www.katc.mil.kr/katc/community/children.jsp"
              >
                {Object.entries(katcFormData).map(([name, value]) => (
                  <input type="hidden" key={name} name={name} value={value} />
                ))}
                <p>
                  <Button type="submit">
                    편지 작성
                    <Description>, 2022. 2. 22. 12 PM &ndash;</Description>
                  </Button>
                </p>
              </form>
            </>
          ) : null}
        </ContentPadding>
      </FullHeightPage>
    </>
  )
}

export default ShiftTitle
