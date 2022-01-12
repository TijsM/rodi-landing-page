import styled from "styled-components";
import Link from "next/link";

export const Container = styled.a`
  cursor: pointer;
`;

export const Intro = styled.p`
  color: ${(props) => props.theme.dark};
  font-size: 18px;
  margin-top: 16px;
  max-width: 65%;
  padding-bottom: 48px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
