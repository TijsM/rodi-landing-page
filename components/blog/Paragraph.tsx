import React from "react";
import { P, A, RichText } from "../../styles/componentStyles/Blog/Paragraph";

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
            <A key={text.text.content} href={text.href}>
              <RichText {...richProps}> {text.text.content}</RichText>
            </A>
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
