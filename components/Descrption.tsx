import styled from 'styled-components'
import { ShiftTheme } from '../styles/ShiftTheme'

const Description = styled.span`
  color: ${({ theme }) =>
    (theme as ShiftTheme).backgroundColor
      .mix((theme as ShiftTheme).textColor, 0.6)
      .toString()};
  & > * {
    vertical-align: baseline;
  }
`

export default Description
