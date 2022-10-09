import React from "react";
import { P, A, RichText } from "../../styles/componentStyles/Blog/Paragraph";
import Link from "./Link";

export default function Paragraph({ block }) {
  return (
    <P>
      {block.paragraph.text.map((text) => {
        const isBold = text.annotations.bold;
        const isUnderlined = text.annotations.underline;
        const isItalic = text.annotations.italic;

        const richProps = { isBold, isUnderlined, isItalic };

        if (text.href) {
          return (
            <Link
              text={text.text.content}
              href={text.href}
              richProps={richProps}
            />
          );
        }
        return (
          <RichText key={text.text.content} {...richProps}>
            {text.text.content}
          </RichText>
        );
      })}
    </P>
  );
}
