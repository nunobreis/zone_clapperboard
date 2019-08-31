import styled from 'styled-components'

const lightColor = ({ theme }) => theme.colors.light

export const Wrapper = styled.div`
  background-color: ${lightColor};
  border-radius: .4rem;
  padding: 2rem;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 12%);
  margin: 2rem;
`
