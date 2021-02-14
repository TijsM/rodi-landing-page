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
        <ImageContainer>
          <Image
            src="/images/komoot.png"
            alt="strava logo"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <ImageContainer>
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
      <TextBlock>Open the Rodi, select your route. Enjoy!</TextBlock>
      <ImageContainer width={"150px"} height={"150px"}>
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
      <ImageContainer width={"150px"} height={"150px"}>
        <Image
          src="/images/strava.png"
          alt="strava logo"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
    </>
  );

  return (
    <Page>
      <PageLayout>
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
