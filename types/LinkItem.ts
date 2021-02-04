import Color from 'color'

interface LinkItem {
  id: string
  caption: string
  description: string
  href: string
  color: Color
  iconFormat?: 'svg' | 'png'
}

export default LinkItem
