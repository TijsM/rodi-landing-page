import React from "react";
import { P, A, RichText } from "../../styles/componentStyles/Blog/Paragraph";

export default function Paragraph({ block }) {
  return (
    <P key={block.id}>
      {block.paragraph.text.map((text) => {
        const isBold = text.annotations.bold;
        const isUnderlined = text.annotations.underline;
        const isItalic = text.annotations.italic;

        if (text.href) {
          return (
            <A key={text.text.content} href={text.href}>
              <RichText> {text.text.content}</RichText>
            </A>
          );
        }
        return (
          <RichText
            key={text.text.content}
            isBold={isBold}
            isUnderlined={isUnderlined}
            isItalic={isItalic}
          >
            {text.text.content}
          </RichText>
        );
      })}
    </P>
  );
}
