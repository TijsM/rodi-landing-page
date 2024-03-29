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
  Highlight,
} from "../styles/componentStyles/Header";
import StoreButtons from "./StoreButtons";

export default function Header() {
  const title = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(title.current, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 70,
    });
  }, []);

  return (
    <Container>
      <PageLayout>
        <Content>
          <H1 ref={title}>Ready for your next adventure?</H1>
          <InfoText>
            Rodi is a <Highlight>free app</Highlight> that functions as a{" "}
            <Highlight>bike computer</Highlight> showing the route and
            statistics of your trip.
          </InfoText>
          <StoreButtons analyticsCategory={"header"} />
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
