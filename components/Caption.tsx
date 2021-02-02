import React from 'react'
import styled from 'styled-components'
import { sizeUnder } from '../utils/Layout'

const CaptionContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 -1rem -1rem 0;
  padding: 4px 1.5rem 1rem 4px;
  font-size: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColorInverted.toString()};
  letter-spacing: -0.1ch;
  line-height: 1;
  ${sizeUnder.md`
    font-size: 2.5rem;
  `}
  ${sizeUnder.xs`
    font-size: 2rem;
  `}
`

const CaptionForeground = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: -0.1ch;
  & ::selection {
    color: ${({ theme }) => theme.textColor.toString()};
    background: ${({ theme }) => theme.textColorInverted.alpha(0.5).toString()};
  }
`

const CaptionBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.textColor.toString()};
`

interface Props {
  content: string
}

const Caption: React.FC<Props> = (props) => {
  return (
    <>
      {props.content.split('\n').map((s, i) => (
        <React.Fragment key={i}>
          <CaptionContainer>
            <CaptionBackground />
            <CaptionForeground>{s}</CaptionForeground>
          </CaptionContainer>
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export default Caption
