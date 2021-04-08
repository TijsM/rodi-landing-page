import React from "react";

import Button from "../Button";

import { Article, ButtonContainer, H1 } from "../../styles/Upload";

import { UploadPageProps } from "../../types/UploadTypes";

export default function Done({ next }: UploadPageProps) {
  return (
    <Article>
      <H1>All done! You can now find the route in the app.</H1>

      <ButtonContainer>
        <Button
          text="Upload another one"
          onClick={() => {
            next();
          }}
        />
      </ButtonContainer>
    </Article>
  );
}
