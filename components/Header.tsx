import React from "react";

import Button from "../components/Button";

import { PageLayout } from "../styles/Layouts";
import { H1 } from "../styles/Titles";
import {
  Content,
  Container,
  InfoText,
  LearnMore,
} from "../styles/componentStyles/Header";

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
          <Button link="#download" text="Download the app" />
        </Content>
      </PageLayout>
      <LearnMore>
        <Button link="#features" text="Learn more" size="small" />
      </LearnMore>
    </Container>
  );
}
