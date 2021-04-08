import React, { useState } from "react";
import Loader from "react-spinners/SyncLoader";

import Button from "../Button";

import {
  Article,
  Description,
  ButtonContainer,
  Input,
  InputContainer,
  H1,
  ErrorText,
} from "../../styles/Upload";

import { UploadPageProps } from "../../types/UploadTypes";

import { backendUrl } from "../../constants/api";

export default function Login({ next, setUser }: UploadPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const onLogIn = async () => {
    setLoading(true);
    const res = await fetch(backendUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setLoading(false);

    const user = await res.json();
    if (user.error) {
      setPassword("");
      setError("Account not found...");
    } else {
      setUser(user);
      next();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onLogIn();
    }
  };

  return (
    <Article>
      <H1>We have to know who you are.</H1>
      <Description>
        Log in to your Rodi account so you can find your route straight into
        your app.
      </Description>

      <InputContainer>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
      <ButtonContainer>
        {loading ? (
          <Loader color={"white"} size={24} />
        ) : (
          <Button
            disabled={!(email.length > 0) || !(password.length > 0)}
            text="Log in"
            onClick={() => {
              onLogIn();
            }}
          />
        )}
      </ButtonContainer>
    </Article>
  );
}
