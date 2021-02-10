import React, { useState } from "react";

import { logEvent } from "../utils/analytics";

import {
  BackDrop,
  Popup,
  H2,
  Explenation,
  ExplenationSection,
  Input,
  Submit,
  Close,
  FormContainer,
} from "../styles/componentStyles/DownloadPopup";
import { PageLayout } from "../styles/Layouts";

type Props = {
  onClose: () => void;
};

export default function DownloadPopup({ onClose }: Props) {
  const [email, setEmail] = useState("");

  const onSubmit = async () => {
    logEvent({
      category: "Sign up popup",
      event: {
        type: "submit",
        name: "sign up to email list",
      },
    });
    onClose();

    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });
  };

  const logFocus = () => {
    logEvent({
      category: "Sign up popup",
      event: {
        type: "focus",
        name: "focus email field",
      },
    });
  };

  const closeModal = () => {
    onClose();

    logEvent({
      category: "Sign up popup",
      event: {
        type: "click",
        name: "abort email registration",
      },
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <BackDrop>
      <Popup>
        <PageLayout>
          <H2>Almost Ready! Sign up and be the first to use Rodi.</H2>
          <Explenation>
            <ExplenationSection>
              We are working hard to get Rodi ready as fast as possible.
            </ExplenationSection>
            <ExplenationSection>
              Leave your email and be notifified when we you can download the
              app from the stores.
            </ExplenationSection>
          </Explenation>
          <FormContainer>
            <Input
              onKeyPress={handleKeyPress}
              onFocus={logFocus}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Submit onClick={onSubmit}>Submit</Submit>
          </FormContainer>
        </PageLayout>
        <Close onClick={closeModal}>Naah, leave me alone...</Close>
      </Popup>
    </BackDrop>
  );
}
