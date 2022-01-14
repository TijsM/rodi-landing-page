import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 50vh;

  background-image: url("../images/blog-header.png");
  background-size: cover;
  background-position: right 0;

  @media only screen and (min-width: 1000px) {
    min-height: 75vh;
  }
`;
export const Content = styled.div`
  width: 100%;

  @media only screen and (min-width: 1000px) {
    width: 65%;
  }
`;

export const Intro = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 18px;

  margin-top: 64px;
  line-height: 125%;

  @media only screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;
