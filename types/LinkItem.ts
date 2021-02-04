import Color from 'color'
import { ReactNode } from 'react'

type LinkItem = {
  id: string
  href?: string
  address?: string
  caption: string
  description?: ReactNode
  color: Color
  iconFormat?: 'svg' | 'png'
  type?: 'link' | 'mail'
}

export default LinkItem
