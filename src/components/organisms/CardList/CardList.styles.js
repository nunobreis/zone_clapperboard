import styled from 'styled-components'

import Label from '../../atoms/Label/Label'
import Card from '../../atoms/Card/Card'

const biggerThanTablet = ({ theme }) => theme.device.tablet

export const StyledLabel = styled(Label)`
  display: block;
`

export const MovieDetails = styled.div`
  @media ${biggerThanTablet} {
    display: flex;
    justify-content: space-between;
  }
  
  margin: 1.2rem auto;

  & > div {
    margin-left: 1rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const StyledCard = styled(Card)`
  flex: 1 40rem;
  margin: 1.5rem;
`
