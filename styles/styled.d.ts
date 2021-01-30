import 'styled-components'
import { ShiftTheme } from './ShiftTheme'

declare module 'styled-components' {
  export type DefaultTheme = ShiftTheme
}
