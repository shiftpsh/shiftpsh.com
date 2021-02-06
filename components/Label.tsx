import Color from 'color'
import styled from 'styled-components'

const LabelContainer = styled.div`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.05ch;
  font-size: 0.6em;
  padding: 0.2em 0.5em;
  color: white;
  font-weight: bold;
  vertical-align: middle;
`

interface Props {
  color: Color
}

const Label: React.FC<Props> = (props) => {
  return (
    <LabelContainer
      style={{
        color: props.color.toString(),
        border: `1px solid ${props.color.toString()}`,
      }}
    >
      {props.children}
    </LabelContainer>
  )
}

export default Label
