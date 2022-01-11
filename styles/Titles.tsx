import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: white;
  line-height: 125%;

  /* mix-blend-mode: difference; */

  @media only screen and (min-width: 768px) {
    font-size: 96px;
  }
`;

export const H2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.dark};
  line-height: 125%;

  @media only screen and (min-width: 768px) {
    font-size: 72px;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.dark};
  line-height: 125%;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
