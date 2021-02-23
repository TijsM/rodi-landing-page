import React, { useState, useRef } from "react";
import Link from "next/link";

import Image from "next/image";
import { gsap } from "gsap/dist/gsap";

import DownloadPopup from "../components/DownloadPopup";

import {
  Page,
  Container,
  Select,
  SelectGroup,
  Explenation,
  TextBlock,
  ImageContainer,
  H2,
  A,
} from "../styles/componentStyles/Journey";
import { ImageGroup } from "../styles/componentStyles/Journey/Plan";

import { PageLayout } from "../styles/Layouts";
import { LinkButton } from "../styles/LinkButton";

type JourneyStep = "plan" | "enjoy" | "share";

export default function Journey() {
  const [step, setStep] = useState<JourneyStep>("plan");
  const [showPopup, setShowPopup] = useState(false);

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
        Create your own routes with
        <Link href="https://www.komoot.com/plan" passHref={true}>
          <A target="_blank">Komoot</A>
        </Link>
        or
        <Link href="https://www.strava.com/routes/new" passHref={true}>
          <A target="_blank">Strava</A>
        </Link>
        and upload them to <LinkButton onClick={() => setShowPopup(true)}>rodi.app/tracks</LinkButton>.
      </TextBlock>
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
    <>
      <Page>
        <PageLayout ignoreVHeight>
          <H2>Get the most out of Rodi</H2>
          <Container>
            <SelectGroup>
              <Select
                onClick={() => changeStep("plan")}
                selected={step === "plan"}
              >
                1. Plan and discover routes
              </Select>
              <Select
                onClick={() => changeStep("enjoy")}
                selected={step === "enjoy"}
              >
                2. Enjoy the ride
              </Select>
              <Select
                onClick={() => changeStep("share")}
                selected={step === "share"}
              >
                3. Share the adventure
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
      {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
