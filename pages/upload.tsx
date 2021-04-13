import { useEffect, useRef, useState } from "react";
import { initGA, logPageView } from "../utils/analytics";

import gsap from "gsap";

import Headers from "../components/SeoHeaders";
import Intro from "../components/upload/Intro";
import Login from "../components/upload/Login";
import UploadRoute from "../components/upload/UploadRoute";
import Done from "../components/upload/Done";

import { ScreenWidth } from "../styles/Layouts";
import { Section } from "../styles/Upload";

type UploadStep = "intro" | "login" | "upload" | "done";

export default function Home() {
  const [step, setStep] = useState<UploadStep>("intro");
  const tempRef = useRef(null);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

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
      const nextStep = step === "done" ? "upload" : steps[currentStepIndex + 1];
      tl.call(setStep, [nextStep]);
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
            {step === "upload" && (
              <UploadRoute next={() => next()} user={user} />
            )}
            {step === "done" && <Done next={() => next()} />}
          </div>
        </Section>
      </ScreenWidth>
    </>
  );
}
