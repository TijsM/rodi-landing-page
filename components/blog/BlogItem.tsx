import React from "react";
import Link from "next/link";

import { Container, Intro } from "../../styles/componentStyles/Blog/BlogItem";
import { H3 } from "../../styles/Titles";

interface BlogItemProps {
  name: string;
  intro: string;
  url: string;
}
export default function BlogItem({ name, intro, url }: BlogItemProps) {
  return (
    <Link href={"/blog/" + url}>
      <Container>
        <H3>{name}</H3>
        <Intro>{intro}</Intro>
      </Container>
    </Link>
  );
}
