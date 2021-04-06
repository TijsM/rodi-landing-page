import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import Headers from "../components/SeoHeaders";
import Button from "../components/Button";

import { ScreenWidth } from "../styles/Layouts";
import {
  Article,
  Section,
  Description,
  ButtonContainer,
} from "../styles/Upload";
import { H1 } from "../styles/Titles";

type UploadStep = "intro" | "login" | "upload" | "done";

export default function Home() {
  const [step, setStep] = useState<UploadStep>("intro");

  const tempRef = useRef(null);

  const steps: UploadStep[] = ["intro", "login", "upload", "done"];

  const next = () => {
    const currentStepIndex = steps.indexOf(step);
    const tl = gsap.timeline();

    const ANIMATION_DURATION = 0.5
    const FADE_OFFSET = 500

    const fadeOut = () => {
      tl.to(tempRef.current, {
        duration: ANIMATION_DURATION,
        opacity: 0,
        translateY: -FADE_OFFSET,
      });
    };
    const updateState = () => {
      tl.call(setStep, [steps[currentStepIndex + 1]]);
    };
    const prepareForFadeInAnimation = () => {
      tl.to(tempRef.current, {
        duration: 0,
        opacity: 0,
        translateY: FADE_OFFSET,
      });
    };
    const fadeIn = () => {
      tl.to(tempRef.current, {
        duration: ANIMATION_DURATION,
        opacity: 1,
        translateY: 0,
      });
    };

    fadeOut();
    updateState();
    prepareForFadeInAnimation();
    fadeIn();
  };

  const intro = (
    <Article>
      <H1>Ready to go on your next adventure?</H1>
      <Description>
        Upload your created route here, and open it in the app!
      </Description>
      <ButtonContainer>
        <Button
          text="Upload a route"
          onClick={() => {
            next();
          }}
        />
      </ButtonContainer>
    </Article>
  );

  const logIn = (
    <Article>
      <H1>We have to know who you are.</H1>
      <Description>Log in to your Rodi account so you can find your route straight into your app.</Description>
      <ButtonContainer>
        <Button
          text="Log in"
          onClick={() => {
            next();
          }}
        />
      </ButtonContainer>
    </Article>
  );

  return (
    <>
      <Headers />
      <ScreenWidth>
        <Section>
          <div ref={tempRef}>
            {step === "intro" && intro}
            {step === "login" && logIn}
          </div>
        </Section>
      </ScreenWidth>
    </>
  );
}
