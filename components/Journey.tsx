import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import { gsap } from "gsap/dist/gsap";

import {
  Page,
  Container,
  Select,
  SelectGroup,
  Explenation,
  TextBlock,
  ImageContainer,
  H2,
} from "../styles/componentStyles/Journey";
import { ImageGroup } from "../styles/componentStyles/Journey/Plan";

import { PageLayout } from "../styles/Layouts";

type JourneyStep = "plan" | "enjoy" | "share";

export default function Journey() {
  const [step, setStep] = useState<JourneyStep>("plan");
  const explenation = useRef(null);

  const changeStep = (selected: JourneyStep) => {
    const tl = gsap.timeline();
    tl.to(explenation.current, {
      duration: 0.3,
      opacity: 0,
    });
    tl.call(setStep, [selected]);
    tl.to(explenation.current, {
      duration: 0.3,
      opacity: 1,
    });
  };

  const plan = (
    <>
      <TextBlock>
        Create a route with the free service Komoot. You can also use Strava
        premium to create routes.
      </TextBlock>
      <TextBlock>Upload the created route to rodi.app/routes.</TextBlock>
      <ImageGroup>
        <ImageContainer width={100} height={100}>
          <Image
            src="/images/komoot.png"
            alt="strava logo"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <ImageContainer width={100} height={100}>
          <Image
            src="/images/strava.png"
            alt="strava logo"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </ImageGroup>
    </>
  );

  const enjoy = (
    <>
      <TextBlock>Open the Rodi app, select your route. Enjoy!</TextBlock>
      <ImageContainer width={150} height={150}>
        <Image
          src="/images/rodi-app-icon.png"
          alt="strava logo"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
    </>
  );

  const share = (
    <>
      <TextBlock>
        After completing your ride it will be shared on Strava immediatly.
      </TextBlock>
      <ImageContainer width={150} height={150}>
        <Image
          src="/images/strava.png"
          alt="strava logo"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </ImageContainer>
    </>
  );

  return (
    <Page>
      <PageLayout ignoreVHeight>
      <H2>Get the most out of Rodi</H2>
        <Container>
          <SelectGroup>
            <Select
              onClick={() => changeStep("plan")}
              selected={step === "plan"}
            >
              Plan and discover routes
            </Select>
            <Select
              onClick={() => changeStep("enjoy")}
              selected={step === "enjoy"}
            >
              Enjoy the ride
            </Select>
            <Select
              onClick={() => changeStep("share")}
              selected={step === "share"}
            >
              Share the adventure
            </Select>
          </SelectGroup>
          <Explenation ref={explenation}>
            {step === "plan" && plan}
            {step === "enjoy" && enjoy}
            {step === "share" && share}
          </Explenation>
        </Container>
      </PageLayout>
    </Page>
  );
}
