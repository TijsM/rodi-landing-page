import React from "react";

import { logEvent, AnalyticsData } from "../utils/analytics";

import { StyledButton } from "../styles/Button";

type Props = {
  text: string;
  link: string;
  size?: "normal" | "small";
  trackingData: AnalyticsData;
};

export default function Button({
  text,
  link,
  size = "normal",
  trackingData,
}: Props) {
  const getSizes = () => {
    return size === "normal"
      ? {
          mobile: {
            padding: "10px 20px",
            borderRadius: "24px",
            fontSize: "18px",
          },
          desktop: {
            padding: "18px 36px",
            borderRadius: "36px",
            fontSize: "24px",
          },
        }
      : {
          mobile: {
            padding: "8px 16px",
            borderRadius: "16px",
            fontSize: "14px",
          },
          desktop: {
            padding: "14px 24px",
            borderRadius: "24px",
            fontSize: "18px",
          },
        };
  };
  return (
    <StyledButton
      onClick={() => {
        logEvent(trackingData);

        document.getElementById(link).scrollIntoView({
          behavior: "smooth",
        });
      }}
      sizes={getSizes()}
    >
      {text}
    </StyledButton>
  );
}
