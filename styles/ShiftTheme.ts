import Color from 'color'

interface ShiftTheme {
  fontFamily: string
  shiftPink: Color
  shiftPinkShade: Color
  shiftYellow: Color
  shiftYellowShade: Color
  textColor: Color
  textColorInverted: Color
  backgroundColor: Color
}

const GothamNotoFontFamily = [
  'Gotham', // TODO erase this
  'Gotham SSm A',
  'Gotham SSm B',
  'Noto Sans KR',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
]
  .map((f) => (f.includes(' ') ? `"${f}"` : f))
  .join(',')

const White = Color.rgb(255, 255, 255)
const ShiftPink = Color.rgb(255, 59, 87)
const ShiftPinkShade = Color.rgb(244, 47, 85)
const ShiftYellow = Color.rgb(255, 183, 23)
const ShiftYellowShade = Color.rgb(255, 167, 26)
const ShiftBlack = Color.rgb(11, 27, 56)

const Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

const Light: ShiftTheme = {
  fontFamily: GothamNotoFontFamily,
  shiftPink: ShiftPink,
  shiftPinkShade: ShiftPinkShade,
  shiftYellow: ShiftYellow,
  shiftYellowShade: ShiftYellowShade,
  textColor: ShiftBlack,
  textColorInverted: White,
  backgroundColor: White,
}

export type { ShiftTheme }
export { Breakpoints, Light }
