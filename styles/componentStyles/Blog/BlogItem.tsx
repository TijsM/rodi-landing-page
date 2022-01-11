import styled from "styled-components";

export const Container = styled.article`
  margin: 24px 0px;

  @media only screen and (min-width: 768px) {
    margin: 24px 0px;
  }
`;

export const Intro = styled.p`
  color: ${(props) => props.theme.dark};
  font-size: 18px;
  margin-top: 16px;
  max-width: 65%;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
