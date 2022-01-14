import React, { useState } from "react";

import { logEvent } from "../utils/analytics";

import StoreButtons from "./StoreButtons";

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
  MockupContainer,
  Mockup,
} from "../styles/componentStyles/Download";

export default function Download() {
  const listItems = ["No ads", "No subscriptions", "No data sharing"];

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
            <StoreButtons analyticsCategory="download section" />
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
    </>
  );
}
