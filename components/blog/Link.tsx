import {
  A,
  RichText,
  RichTextProps,
} from "../../styles/componentStyles/Blog/Paragraph";

interface LinkProps {
  text: string;
  href: string;
  richProps: RichTextProps;
}

export default function ({ text, href, richProps }: LinkProps) {
  return (
    <A key={text} href={href}>
      <RichText {...richProps}> {text}</RichText>
    </A>
  );
}
