import React from "react";

import { Apple, Play } from "../components/storeButtons/Index";

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
  Mockup
} from "../styles/componentStyles/Download";

export default function Download() {
  const listItems = ["No adds", "No subscriptions", "No data sharing"];

  return (
    <PageLayout id="download">
      <Container>
        <Content>
          <H2>Download Rodi now for free.</H2>
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
            <Apple width={165} height={60} />
            <Play width={165} height={60} />
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
  );
}
