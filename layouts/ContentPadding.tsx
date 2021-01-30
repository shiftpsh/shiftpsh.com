import styled from 'styled-components'
import { sizeUnder } from '../utils/Layout'

const ContentPadding = styled.div`
  padding: 0 64px;
  ${sizeUnder.md`
    padding: 0 32px;
  `}
  ${sizeUnder.sm`
    padding: 0 16px;
  `}
`

export default ContentPadding
