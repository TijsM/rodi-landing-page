import styled from "styled-components";
import { H2 as DefaultH2, H3 as DefaultH3 } from "../../Titles";

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.dark};
  padding-bottom: 16px;
  font-size: 18px;
  padding-bottom: 18px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    padding-bottom: 24px;
  }
`;

export const H2 = styled(DefaultH2)`
  padding-bottom: 24px;

  @media only screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
`;
export const H3 = styled(DefaultH3)`
  padding-bottom: 16px;

  @media only screen and (min-width: 768px) {
    padding-bottom: 24px;
  }
`;
