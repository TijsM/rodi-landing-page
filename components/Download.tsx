import React from "react";

import { PageLayout } from "../styles/Layouts";
import { H2 } from "../styles/Titles";
import {
  Description,
  List,
  ListItem,
  ListItemText,
  ListIcon,
} from "../styles/componentStyles/Download";

export default function Download() {
  const listItems = ["No adds", "No subscriptions", "No data sharing"];

  return (
    <PageLayout >
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
    </PageLayout>
  );
}
