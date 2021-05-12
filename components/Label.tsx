import Color from 'color'
import styled, { useTheme } from 'styled-components'
import { ShiftTheme } from '../styles/ShiftTheme'

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

type LabelColorType = Color | 'pink' | 'yellow' | string | undefined

interface Props {
  color?: LabelColorType
}

const getLabelColor = (color: LabelColorType) => {
  const theme = useTheme() as ShiftTheme
  if (color === 'pink') return theme.shiftPink
  if (color === 'yellow') return theme.shiftYellow
  if (typeof color === 'string') return new Color(color)
  if (color === undefined) return theme.textColor
  return color
}

const Label: React.FC<Props> = (props) => {
  const color = getLabelColor(props.color)
  return (
    <LabelContainer
      style={{
        color: color.toString(),
        border: `1px solid ${color.toString()}`,
      }}
    >
      {props.children}
    </LabelContainer>
  )
}

export default Label
