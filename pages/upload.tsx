import { useRef, useState } from "react";

import gsap from "gsap";

import Headers from "../components/SeoHeaders";
import Intro from "../components/upload/Intro";
import Login from "../components/upload/Login";

import { ScreenWidth } from "../styles/Layouts";
import { Section } from "../styles/Upload";

type UploadStep = "intro" | "login" | "upload" | "done";

export default function Home() {
  const [step, setStep] = useState<UploadStep>("intro");
  const tempRef = useRef(null);
  const [user, setUser] = useState<any>();


  console.log('user', user)
  const steps: UploadStep[] = ["intro", "login", "upload", "done"];

  const next = () => {
    const currentStepIndex = steps.indexOf(step);
    const tl = gsap.timeline();

    const ANIMATION_DURATION = 0.5;
    const FADE_OFFSET = 500;

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

  return (
    <>
      <Headers />
      <ScreenWidth>
        <Section>
          <div ref={tempRef}>
            {step === "intro" && <Intro next={() => next()} />}
            {step === "login" && (
              <Login next={() => next()} setUser={setUser} />
            )}
          </div>
        </Section>
      </ScreenWidth>
    </>
  );
}
