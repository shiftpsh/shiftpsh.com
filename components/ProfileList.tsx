import styled from 'styled-components'

const ProfileList = styled.ul`
  list-style-position: outside;
  list-style-type: '»';
  padding-left: 1ch;
  & > li {
    padding-left: 16px;
  }
`

export default ProfileList
