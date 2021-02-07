import React from "react";
import Image from "next/image";

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
  return (
    <Container>
      <PageLayout>
        <TitleContainer>
          <LogoContainer>
            <Logo
              src={"/images/logo-light.png"}
              alt="rodi logo"
              layout="fill"
              objectFit="contain"
            />
          </LogoContainer>
          <InfoTitle>
            Why put the best screen you own away and pay for a bad screen to put
            on your handle bars?
          </InfoTitle>
        </TitleContainer>
      </PageLayout>
      <BackgroundImage
        src={"/images/flying-phone.png"}
        alt="phone screen"
        layout="fill"
        objectFit="cover"
      />
    </Container>
  );
}
