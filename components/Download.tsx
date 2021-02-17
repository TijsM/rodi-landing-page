import React, { useState } from "react";

import { logEvent } from "../utils/analytics";

import { Apple, Play } from "../components/storeButtons/Index";
import DownloadPopup from "../components/DownloadPopup";

import { PageLayout } from "../styles/Layouts";
import { H2 } from "../styles/Titles";
import {
  Container,
  Description,
  Content,
  List,
  ListItem,
  ListItemText,
  ListIcon,
  DownloadButtons,
  MockupContainer,
  Mockup,
} from "../styles/componentStyles/Download";

export default function Download() {
  const [showPopup, setShowPopup] = useState(false);
  const listItems = ["No ads", "No subscriptions", "No data sharing"];

  const onClick = (platform: "ios" | "android") => {
    setShowPopup(true);

    logEvent({
      category: "download section",
      event: {
        type: "click",
        name: `Download ${platform}`,
      },
    });
  };

  return (
    <>
      <PageLayout id="download" isSection>
        <Container>
          <Content>
            <H2>Download Rodi for free.</H2>
            <Description>
              When we say for free, we actually mean for free.
            </Description>
            <List>
              {listItems.map((li) => (
                <ListItem key={li}>
                  <ListIcon />
                  <ListItemText>{li}</ListItemText>
                </ListItem>
              ))}
            </List>
            <DownloadButtons>
              <Apple width={165} height={60} onClick={() => onClick("ios")} />
              <Play
                width={165}
                height={60}
                onClick={() => onClick("android")}
              />
            </DownloadButtons>
          </Content>
          <MockupContainer>
            <Mockup
              src={"/images/iPhone-mockup.png"}
              alt="Rodi on iPhone"
              layout="fill"
              objectFit="contain"
            />
          </MockupContainer>
        </Container>
      </PageLayout>
      {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
