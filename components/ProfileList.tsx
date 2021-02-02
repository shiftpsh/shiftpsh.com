import styled from 'styled-components'

const ProfileList = styled.ul`
  list-style-position: outside;
  list-style-type: '»';
  padding-left: 1ch;
  margin-bottom: 2em;
  & > li {
    padding-left: 16px;
  }
`

export default ProfileList
