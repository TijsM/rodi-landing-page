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

  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const InfoText = styled.div`
  font-style: italic;
  color: white;
  font-size: 18px;
  font-weight: 400;
  padding: 24px 0 18px 0;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    width: 60%;
  }
`;

export const LearnMore = styled.div`
  width: 100%;
  position: absolute;
  bottom: 18px;
  display: flex;
  justify-content: center;
`;
