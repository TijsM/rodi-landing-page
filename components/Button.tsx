import React from "react";

import { StyledButton } from "../styles/Button";

type Props = {
  text: string;
  size?: "normal" | "small";
};

export default function Button({ text, size = "normal" }: Props) {
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
  return <StyledButton sizes={getSizes()}>{text}</StyledButton>;
}
