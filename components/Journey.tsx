import React, { useState } from "react";
import Image from "next/image";

import {
  Page,
  Container,
  Select,
  SelectGroup,
  Explenation,
  TextBlock,
  ImageContainer,
} from "../styles/componentStyles/Journey";
import { ImageGroup } from "../styles/componentStyles/Journey/Plan";

import { PageLayout } from "../styles/Layouts";

export default function Journey() {
  const [step, setStep] = useState<"plan" | "enjoy" | "share">("plan");

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
        <Container>
          <SelectGroup>
            <Select onClick={() => setStep("plan")} selected={step === "plan"}>
              Plan and discover routes
            </Select>
            <Select
              onClick={() => setStep("enjoy")}
              selected={step === "enjoy"}
            >
              Enjoy it
            </Select>
            <Select
              onClick={() => setStep("share")}
              selected={step === "share"}
            >
              Share the adventure
            </Select>
          </SelectGroup>
          <Explenation>
            {step === "plan" && plan}
            {step === "enjoy" && enjoy}
            {step === "share" && share}
          </Explenation>
        </Container>
      </PageLayout>
    </Page>
  );
}
