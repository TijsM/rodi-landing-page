import { useRef, useState } from "react";
import { useLogPageView } from "../utils/analytics";

import gsap from "gsap";

import Headers from "../components/SeoHeaders";
import Intro from "../components/upload/Intro";
import Login from "../components/upload/Login";
import UploadRoute from "../components/upload/UploadRoute";
import Done from "../components/upload/Done";

import { ScreenWidth } from "../styles/Layouts";
import { Section, Layout } from "../styles/Upload";
import SeoHeaders from "../components/SeoHeaders";

type UploadStep = "intro" | "login" | "upload" | "done";

export default function Home() {
  const [step, setStep] = useState<UploadStep>("intro");
  const tempRef = useRef(null);
  const [user, setUser] = useState<any>();

  useLogPageView();

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
      <SeoHeaders description="Upload routes to rodi, our free to use mobile cycling app." />
      <ScreenWidth>
        <Section>
          <Layout>
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
          </Layout>
        </Section>
      </ScreenWidth>
    </>
  );
}
