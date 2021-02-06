import React from "react";
import styled from "styled-components";

import Button from '../components/Button'

import { PageLayout } from "../styles/PageLayout";
import { H1 } from "../styles/Titles";
import { StyledButton } from "../styles/Button";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("../images/rodi-hero-landing.png");
  background-size: cover;
  background-position: right 0;


  @media only screen and (min-width: 768px) {
    background-image: url("../images/rodi-hero-landing.png");
  }
`;

const Content = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

const InfoText = styled.div`
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

const LearnMore = styled.div`
  width: 100%;
  position: absolute;
  bottom: 18px;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <Container>
      <PageLayout>
        <Content>
          <H1>Ready to go on your next adventure?</H1>
          <InfoText>
            Rodi is a free app witch functions as a bike computer showing the
            way and statistics of your trip
          </InfoText>
          <Button text="Download the app"/>
        </Content>
      </PageLayout>
      <LearnMore>
        <Button text="Learn more" size="small"/>

      </LearnMore>
    </Container>
  );
}
