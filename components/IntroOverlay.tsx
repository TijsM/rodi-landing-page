import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import {
  IntroOverlayContainer,
  OverlayColumn,
} from "../styles/componentStyles/IntroOverlay";


export default function IntroOverlay() {
  const col1 = useRef(null);
  const col2 = useRef(null);
  const col3 = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(col1.current, {
      duration: 1.1,
      delay: 1.2,
      height: 0,
      ease: "power4.easeIn",
    })
      .to(col2.current, {
        duration: 1.1,
        delay: -0.75,
        height: 0,
        ease: "power4.out",
      })
      .to(col3.current, {
        duration: 1.1,
        delay: -0.75,
        height: 0,
        ease: "power4.out",
      })
      .to(container.current, {
        duration: 0,
        css: { display: "none" },
      });
  }, []);

  return (
    <>
      <IntroOverlayContainer ref={container}>
        <OverlayColumn ref={col1}/>
        <OverlayColumn ref={col2}/>
        <OverlayColumn ref={col3}/>
      </IntroOverlayContainer>
    </>
  );
}
