import React, { useState } from "react";

import { logEvent } from "../utils/analytics";

import { Apple, Play } from "../components/storeButtons/Index";
import DownloadPopup from "../components/DownloadPopup";

import { H3 } from "../styles/Titles";
import { Container, DownloadButtons } from "../styles/componentStyles/Footer";
import { PageLayout } from "../styles/Layouts";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const onClick = (platform: "ios" | "android") => {
    setShowPopup(true);

    logEvent({
      category: "footer section",
      event: {
        type: "click",
        name: `Download ${platform}`,
      },
    });
  };
  return (
    <>
      <PageLayout isSection>
        <Container>
          <H3>get Rodi now.</H3>
          <DownloadButtons>
            <Apple width={165} height={60} onClick={() => onClick("ios")} />
            <Play width={165} height={60} onClick={() => onClick("android")} />
          </DownloadButtons>
        </Container>
      </PageLayout>
      {showPopup && (
        <DownloadPopup
          onClose={() => setShowPopup(false)}
          skipMessage="Naah, leave me alone..."
        />
      )}
    </>
  );
}
