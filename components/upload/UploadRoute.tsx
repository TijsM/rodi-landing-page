import React, { useState } from "react";

import Button from "../Button";

import {
  Article,
  Description,
  ButtonContainer,
  H1,
  Input,
  InputContainer,
  FileInput,
} from "../../styles/Upload";

import { UploadPageProps } from "./UploadTypes";

import { backendUrl } from "../../constants/api";

export default function UploadRoute({ next, user }: UploadPageProps) {
  const [routeName, setRouteName] = useState("");
  const [route, setRoute] = useState();
  console.log("route", route)

  const upload = async () => {
    const formData = new FormData();
    formData.append("gpx", route);
    formData.append("trackName", routeName);


    const res: any = await fetch(backendUrl + "/uploadRoute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: formData,
    });

    console.log(await res.json())
  };

  return (
    <Article>
      <H1>Ready to go on your next adventure?</H1>
      <Description>
        Select a .gpx file on your device and give your route a name.
      </Description>
      <InputContainer>
        <Input
          placeholder="Route name"
          onChange={(e) => setRouteName(e.target.value)}
        />
        <FileInput
          type="file"
          accept=".gpx"
          onChange={(e) => setRoute(e.target.files[0])}
        />
      </InputContainer>
      <ButtonContainer>
        <Button
          text="Upload"
          onClick={() => {
           upload()
          }}
        />
      </ButtonContainer>
    </Article>
  );
}
