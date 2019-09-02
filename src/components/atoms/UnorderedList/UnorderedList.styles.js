import styled from 'styled-components'

export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & > li {
    display: flex;
    flex: 1 3rem; 
  }
`
