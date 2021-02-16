import React, { useEffect, useRef } from "react";

import gsap from "gsap";

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
  const title = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(title.current, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 70,
    })
  }, []);

  return (
    <Container>
      <PageLayout>
        <Content>
          <H1 ref={title}>Ready for your next adventure?</H1>
          <InfoText>
            Rodi is a free app which functions as a bike computer showing the
            route and statistics of your trip
          </InfoText>
          <Button
            link="download"
            trackingData={{
              category: "header",
              event: {
                type: "click",
                name: "Download",
              },
            }}
            text="Download the app"
          />
        </Content>
      </PageLayout>
      <LearnMore>
        <Button
          link="features"
          text="Learn more"
          size="small"
          trackingData={{
            category: "header",
            event: {
              type: "click",
              name: "Learn more",
            },
          }}
        />
      </LearnMore>
    </Container>
  );
}
