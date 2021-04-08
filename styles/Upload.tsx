import styled from "styled-components";
import { PageLayout } from "./Layouts";
import { H1 as defaultH1 } from "./Titles";

export const H1 = styled(defaultH1)`
  font-size: 48px;
  line-height: 100%;
  
  @media only screen and (min-width: 768px) {
    font-size: 72px;
  }
`;

export const Section = styled(PageLayout)`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  min-height: 100vh;

  align-items: center;
  display: flex;
`;

export const Article = styled.article`
  max-width: 1000px;
`;

export const Description = styled.div`
  font-size: 36px;
  margin-top: 24px;
  font-weight: 300;
`;
export const ButtonContainer = styled.div`
  margin-top: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 32px;
  border: none;
  background-color: transparent;
  color: white;
`;
export const FileInput = styled.input`
 width: 100%;
  font-size: 24px;
  border: none;
`

export const InputContainer = styled.div`
  padding: 24px 0;
`;

export const ErrorText = styled.div`
  padding-top: 24px;
  font-size: 24px;
  color: ${({ theme }) => theme.red};
`;
