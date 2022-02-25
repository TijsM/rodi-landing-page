import styled from "styled-components";

export const P = styled.p`
  color: ${({ theme }) => theme.dark};
  padding-bottom: 16px;
  font-size: 20px;
  padding-bottom: 18px;
  line-height: 110%;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    padding-bottom: 24px;
  }
`;

export const A = styled.a`
  color: ${({ theme }) => theme.dark};
`;

export const RichText = styled.span<{
  isBold: boolean;
  isUnderlined: boolean;
  isItalic: boolean;
}>`
  font-weight: ${({ isBold }) => (isBold ? "bold" : "initial")};
  text-decoration: ${({ isUnderlined }) =>
    isUnderlined ? "underline" : "initial"};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "initial")};
  line-height: 1.4em;
`;
