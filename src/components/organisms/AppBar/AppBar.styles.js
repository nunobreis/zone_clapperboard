import styled from 'styled-components'

const whiteColor = ({ theme }) => theme.colors.light

const primaryColor = ({ theme }) => theme.colors.primary4

const primaryFont = ({ theme }) => theme.fonts.primary

export const Wrapper = styled.div`
  background-color: ${whiteColor};
  display: flex;
  justify-content: space-between;
  padding: 2rem 6%;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .2);
  margin-bottom: 4rem;
`

export const Brand = styled.p`
  color: ${primaryColor};
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 600;
`
