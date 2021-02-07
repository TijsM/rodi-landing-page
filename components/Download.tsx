import React from "react";

import { Apple, Play } from "../components/storeButtons/Index";
import { PageLayout } from "../styles/Layouts";
import { H2 } from "../styles/Titles";
import {
  Description,
  List,
  ListItem,
  ListItemText,
  ListIcon,
  DownloadButtons,
} from "../styles/componentStyles/Download";

export default function Download() {
  const listItems = ["No adds", "No subscriptions", "No data sharing"];

  return (
    <PageLayout>
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
        <Apple width={140} height={50} />
        <Play width={140} height={50} />
      </DownloadButtons>
    </PageLayout>
  );
}