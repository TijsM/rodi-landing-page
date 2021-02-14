import React from "react";

import {
  IntroOverlayContainer,
  OverlayColumn,
} from "../styles/componentStyles/IntroOverlay";

export default function IntroOverlay() {
  return (
    <>
      <IntroOverlayContainer>
        <OverlayColumn></OverlayColumn>
        <OverlayColumn></OverlayColumn>
        <OverlayColumn></OverlayColumn>
      </IntroOverlayContainer>
    </>
  );
}
