import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("../images/rodi-hero-landing.png");
  background-size: cover;
  background-position: right 0;
`;

export const Content = styled.div`
  width: 100%;

  @media only screen and (min-width: 1000px) {
    width: 65%;
  }
`;

export const InfoText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 125%;
  padding: 24px 0 18px 0;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    width: 60%;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 32px;
    width: 60%;
  }
`;

export const Highlight = styled.span`
  text-decoration: underline;
  font-weight: 600;
`;

export const LearnMore = styled.div`
  width: 100%;
  position: absolute;
  bottom: 18px;
  display: flex;
  justify-content: center;
`;
