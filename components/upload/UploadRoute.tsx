import React, { useState } from "react";
import Loader from "react-spinners/SyncLoader";

import Button from "../Button";

import {
  Article,
  Description,
  ButtonContainer,
  H1,
  InputContainer,
  FileInput,
  ErrorText,
} from "../../styles/Upload";

import { UploadPageProps } from "../../types/UploadTypes";

import { backendUrl } from "../../constants/api";
import Input from "../Input";

type File = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
};

export default function UploadRoute({ next, user }: UploadPageProps) {
  const [routeName, setRouteName] = useState("");
  const [route, setRoute] = useState<undefined | File>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const allFieldsFilledIn = !!routeName && route;
  const fileIsGpx =
    route?.name?.split(".")[route?.name?.split(".")?.length - 1] === "gpx";

  const upload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("gpx", route as unknown as Blob);
    formData.append("trackName", routeName);

    const res: any = await fetch(backendUrl + "/uploadRoute", {
      method: "POST",
      headers: {
        "x-access-token": user.token,
      },
      body: formData,
    });

    const response = await res.json();
    setLoading(false);

    if (response.fileName) {
      next();
    } else {
      setError(response.message);
    }
  };

  return (
    <Article>
      <H1>Ready to go on your next adventure?</H1>
      <Description>
        Select a .gpx file on your device and give your route a name.
      </Description>
      <InputContainer>
        <Input
          label="Route-name"
          placeholder="Stage 1 - Tour de France"
          onChange={(e) => setRouteName(e.target.value)}
          value={routeName}
          type="text"
        />
        <FileInput
          type="file"
          accept=".gpx"
          onChange={(e) => setRoute(e.target.files[0])}
        />
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
      <ButtonContainer>
        {loading ? (
          <Loader color={"white"} size={24} />
        ) : (
          <Button
            disabled={!allFieldsFilledIn || !fileIsGpx}
            text="Upload"
            onClick={() => {
              upload();
            }}
          />
        )}
      </ButtonContainer>
    </Article>
  );
}
