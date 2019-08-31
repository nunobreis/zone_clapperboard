import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const color = ({ theme }) => theme.colors.primary

const secondaryColor = ({ theme }) => theme.colors.dark

const Spinner = styled.div`
  margin: 2rem auto;
  box-sizing: border-box;
  width: 4rem;
  height: 4rem;
  text-indent: -9999em;
  border: 0.5rem solid ${color};
  border-left: 0.5rem solid ${secondaryColor};
  border-radius: 50%;
  animation: ${animation} 0.5s infinite linear;
`

export default Spinner
