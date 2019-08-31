import styled from 'styled-components'

const warningColor = ({ theme }) => theme.colors.warning

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 4rem;
  text-align: center;

  h3 {
    margin-top: 2rem;
    color: ${warningColor};
  }
`
