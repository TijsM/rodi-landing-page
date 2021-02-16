import React, { useEffect } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import {
  Container,
  InfoTitle,
  TitleContainer,
  BackgroundImage,
  LogoContainer,
  Logo,
} from "../styles/componentStyles/Screen";
import { PageLayout } from "../styles/Layouts";

export default function Sceen() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#backgroundImage", {
      duration: 0.1,
      ease: "ease",
      scaleX: 1.3,
      scaleY: 1.3,
      scrollTrigger: {
        trigger: "#backgroundImage",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <Container>
      <PageLayout>
        <TitleContainer>
          <InfoTitle>
            Why put the best screen you own away and pay for a bad screen to put
            on your handle bars?
          </InfoTitle>
        </TitleContainer>
        <LogoContainer>
          <Logo
            src={"/images/logo-light.png"}
            alt="rodi logo"
            layout="fill"
            objectFit="contain"
          />
        </LogoContainer>
      </PageLayout>
      <BackgroundImage
        id="backgroundImage"
        src={"/images/flying-phone.png"}
        alt="phone screen"
        layout="fill"
        objectFit="cover"
      />
    </Container>
  );
}
