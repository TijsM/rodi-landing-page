import React from "react";

import Button from "../../components/Button";

import { Article, Description, ButtonContainer, H1 } from "../../styles/Upload";

import { UploadPageProps } from "../../types/UploadTypes";

export default function Intro({ next }: UploadPageProps) {
  return (
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
}
