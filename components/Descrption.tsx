import styled from 'styled-components'
import { ShiftTheme } from '../styles/ShiftTheme'

const Description = styled.span`
  color: ${({ theme }) =>
    (theme as ShiftTheme).backgroundColor
      .mix((theme as ShiftTheme).textColor, 0.4)
      .toString()};
  & > * {
    vertical-align: middle;
  }
`

export default Description
