import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useShadowLightCoordinates from '../hooks/ShadowLightCoordinates'
import { castShadow } from '../styles/ShiftTheme'
import LinkItem from '../types/LinkItem'
import OuterLink from './OuterLink'

const LinkIcon = styled.img`
  transform: scale(1);
  transition: transform 0.3s ease;
`
const LinkIconShadow = styled.div`
  position: absolute;
  width: 4.8em;
  height: 4.8em;
  left: 0.6em;
  top: 0.6em;
  border-radius: 1em;
`
const LinkIconContainer = styled.div`
  width: 6em;
  height: 6em;
  border-radius: 1em;
  margin-bottom: 1em;
  background: #fff;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.025);
    ${LinkIcon} {
      transform: scale(1.1);
    }
  }
`

const IconCaption = styled.div`
  font-weight: bold;
`

const IconDescription = styled.div``

const GlyphShown = styled.span`
  display: inline-block;
`

const GlyphHidden = styled.span`
  display: inline-block;
  color: transparent;
  width: 0;
  user-select: none;
`

interface ObfuscateGlyph {
  glyph: string
  include: boolean
}

interface State {
  obfuscation: ObfuscateGlyph[]
}

const LinkComponent: React.FC<{ link: LinkItem }> = (props) => {
  const [shadowX, shadowY] = useShadowLightCoordinates()
  const {
    id,
    caption,
    description,
    href,
    address,
    iconFormat,
    color,
    type,
  } = props.link

  const [state, setState] = useState<State>({ obfuscation: [] })

  useEffect(() => {
    if (address === undefined) return
    const glyphs = 'abcdefghijklmnopqrstuvwxyz.@-_'
    setState((prevState) => ({
      ...prevState,
      obfuscation: address.split('').flatMap((glyph) =>
        new Array(Math.floor(Math.random() * 4) + 1)
          .fill(undefined)
          .map((_, i) =>
            i === 0
              ? { glyph: glyph.replace('|', '@'), include: true }
              : {
                  glyph: glyphs.charAt(
                    Math.floor(Math.random() * glyphs.length)
                  ),
                  include: false,
                }
          )
      ),
    }))
  }, [])

  if (type === 'mail') {
    return (
      <div
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={() => {
          if (window !== undefined) window.open('mailto:me@shiftpsh.com')
        }}
      >
        <LinkIconShadow
          style={{
            background: color.alpha(0.15).toString(),
            boxShadow: castShadow(color, 0, 0, 1, 1),
            transform: `translate(${shadowX * 0.7}em, ${shadowY * 0.7}em)`,
          }}
        />
        <LinkIconContainer
          style={{
            background: color.toString(),
          }}
        >
          <LinkIcon src={`/res/icons/${id}.${iconFormat ?? 'svg'}`} />
        </LinkIconContainer>
        <IconCaption>{caption}</IconCaption>
        <IconDescription>
          {state.obfuscation.map((g, i) =>
            g.include ? (
              <GlyphShown key={i}>{g.glyph}</GlyphShown>
            ) : (
              <GlyphHidden key={i}>{g.glyph}</GlyphHidden>
            )
          )}
        </IconDescription>
      </div>
    )
  }

  return (
    <OuterLink
      href={href}
      style={{ background: 'inherit', textDecoration: 'none' }}
    >
      <div style={{ position: 'relative' }}>
        <LinkIconShadow
          style={{
            background: color.alpha(0.15).toString(),
            boxShadow: castShadow(color, 0, 0, 1, 1),
            transform: `translate(${shadowX * 0.7}em, ${shadowY * 0.7}em)`,
          }}
        />
        <LinkIconContainer
          style={{
            background: color.toString(),
          }}
        >
          <LinkIcon src={`/res/icons/${id}.${iconFormat ?? 'svg'}`} />
        </LinkIconContainer>
        <IconCaption>{caption}</IconCaption>
        <IconDescription>{description}</IconDescription>
      </div>
    </OuterLink>
  )
}

export default LinkComponent
