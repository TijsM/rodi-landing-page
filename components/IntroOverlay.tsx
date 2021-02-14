import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import {
  IntroOverlayContainer,
  OverlayColumn,
} from "../styles/componentStyles/IntroOverlay";

export default function IntroOverlay() {
  const col1 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    console.log(col1.current)
  }, []);

  return (
    <>
      <IntroOverlayContainer>
        <OverlayColumn ref={col1}></OverlayColumn>
        <OverlayColumn></OverlayColumn>
        <OverlayColumn></OverlayColumn>
      </IntroOverlayContainer>
    </>
  );
}
