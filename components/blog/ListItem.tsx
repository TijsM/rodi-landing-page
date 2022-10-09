import react from "react";
import {
  Li,
  Container,
  ListItemIndicator,
} from "../../styles/componentStyles/Blog/ListItem";
import Link from "./Link";

export default function List({ block }) {
  const text = block.bulleted_list_item.text.map((text) => {
    const isBold = text.annotations.bold;
    const isUnderlined = text.annotations.underline;
    const isItalic = text.annotations.italic;

    const richProps = { isBold, isUnderlined, isItalic };

    return text.href ? (
      <Link text={text.text.content} href={text.href} richProps={richProps} />
    ) : (
      text.plain_text
    );
  });

  return (
    <Container key={block.bulleted_list_item.text[0].plain_text}>
      <ListItemIndicator />
      <Li>{text}</Li>
    </Container>
  );
}
