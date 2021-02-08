import React, { useState } from "react";

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

  const onSubmit = () => {
    console.log("store in DB", email);
    onClose();
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Submit onClick={onSubmit}>Submit</Submit>
          </FormContainer>
        </PageLayout>
        <Close onClick={onClose}>Naah, leave me alone...</Close>
      </Popup>
    </BackDrop>
  );
}
