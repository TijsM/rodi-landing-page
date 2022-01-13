import react from "react";
import {
  Li,
  Container,
  ListItemIndicator,
} from "../../styles/componentStyles/Blog/ListItem";

export default function List({ block }) {
  return (
    <Container>
      <ListItemIndicator />
      <Li>{block.bulleted_list_item.text[0].plain_text}</Li>
    </Container>
  );
}
