import styled from 'styled-components'
import { castShadow } from '../styles/ShiftTheme'

const SnackbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 32px;
  text-align: center;
  pointer-events: none;
  z-index: 1000;
`

const Snackbar = styled.div`
  display: inline-block;
  padding: 16px 32px;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${({ theme }) => castShadow(theme, 8)};
  border-radius: 64px;
  text-align: left;
  pointer-events: all;
`

const UnsupportedBrowserSnackbar: React.FC = () => {
  return (
    <SnackbarContainer>
      <Snackbar>
        <b>
          이 사이트는 Internet Explorer에서 정상적으로 보이지 않을 수 있습니다.
        </b>
        <br />
        <a
          href="https://www.mozilla.org/firefox/new/"
          rel="noreferrer noopener"
        >
          Firefox
        </a>{' '}
        혹은{' '}
        <a href="https://www.google.com/chrome/" rel="noreferrer noopener">
          Chrome
        </a>{' '}
        등의 최신 브라우저를 사용해 주시기 바랍니다.
      </Snackbar>
    </SnackbarContainer>
  )
}

export default UnsupportedBrowserSnackbar
