import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  width: 7rem;
  height: 100%;
  align-items: middle;
  margin-top: 1rem;

  & > svg:hover {
    cursor: pointer;
  }
`
