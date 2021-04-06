import styled from 'styled-components'
import {PageLayout} from './Layouts'

export const Section = styled(PageLayout)`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  min-height: 100vh;

  align-items: center;
  display: flex;
`;

export const Article = styled.article`
    max-width: 1000px
`

export const Description = styled.div`
    font-size: 36px;
    margin-top: 24px;
    font-weight: 300;
`
export const ButtonContainer = styled.div`
  margin-top: 24px;
`
