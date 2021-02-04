import styled, { useTheme } from 'styled-components'
import useShadowLightCoordinates from '../hooks/ShadowLightCoordinates'
import { ShiftTheme } from '../styles/ShiftTheme'

const BackgroundContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`

const BackgroundSizer = styled.div`
  position: relative;
  height: 80%;
  max-height: 640px;
  flex-grow: 1;
`

const BackgroundSvg = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  max-width: 100%;
`

const Background: React.FC = (props) => {
  const theme = useTheme() as ShiftTheme
  const [shadowX, shadowY] = useShadowLightCoordinates()

  return (
    <BackgroundContainer>
      <BackgroundSizer>
        <BackgroundSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 640"
          style={{
            transform: `translate(calc(${shadowX * 2}em + 30%), ${
              shadowY * 2
            }em)`,
            filter: 'blur(1vmax)',
          }}
        >
          <g id="svg-bg-paths">
            <path
              x="420"
              y="270"
              id="svg-main-path"
              transform="translate(0 80) rotate(0 420 270)"
              d="M770.2 332.3L465.5 27.6A93.8 93.8 0 0 0 407.9.4q-4.5-.4-9-.4a94 94 0 0 0-66.6 27.6L27.6 332.3a94.2 94.2 0 0 0 0 133.2 94.2 94.2 0 0 0 133.2 0l238-238.2L579.6 408l57.5 57.5a94.2 94.2 0 0 0 133.2-133.2z"
              fill={theme.backgroundColor.darken(0.1).toString()}
            ></path>
          </g>
        </BackgroundSvg>
        <BackgroundSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 640"
          style={{
            transform: `translate(calc(${shadowX}em + 30%), ${shadowY}em)`,
          }}
        >
          <g id="svg-bg-paths">
            <path
              x="420"
              y="270"
              id="svg-main-path"
              transform="translate(0 80) rotate(0 420 270)"
              d="M770.2 332.3L465.5 27.6A93.8 93.8 0 0 0 407.9.4q-4.5-.4-9-.4a94 94 0 0 0-66.6 27.6L27.6 332.3a94.2 94.2 0 0 0 0 133.2 94.2 94.2 0 0 0 133.2 0l238-238.2L579.6 408l57.5 57.5a94.2 94.2 0 0 0 133.2-133.2z"
              fill={theme.backgroundColor.toString()}
            ></path>
          </g>
        </BackgroundSvg>
      </BackgroundSizer>
    </BackgroundContainer>
  )
}

export default Background
