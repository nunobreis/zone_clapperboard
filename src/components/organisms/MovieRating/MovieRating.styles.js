import styled from 'styled-components'

import Button from '../../atoms/Button/Button'

const whiteColor = ({ theme }) => theme.colors.light
const textColor = ({ theme }) => theme.colors.primary

export const Wrapper = styled.div`
& > div {
  display: flex;
  justify-content: space-between;
}
`

export const SaveRatingButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
`
export const ChangeRatingButton = styled(Button)`
  background-color: ${whiteColor};
  color: ${textColor};
  border: none;
`
