import styled from "styled-components";
import Link from "next/link";

export const A = styled.a`
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 24px;
  margin-bottom: 24px;
  transition: 0.5s;
  box-shadow: 0px 4px 16px 8px rgba(0, 0, 0, 0.03);

  @media only screen and (min-width: 768px) {
    max-width: 65%;
  }
  :hover {
    box-shadow: 0px 4px 32px 8px #13172d29;
  }
`;

export const Intro = styled.p`
  color: ${(props) => props.theme.dark};
  font-size: 18px;
  margin-top: 16px;
  padding-bottom: 48px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
