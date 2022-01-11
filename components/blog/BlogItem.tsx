import React from "react";
import { Container, Intro } from "../../styles/componentStyles/Blog/BlogItem";
import { PageLayout } from "../../styles/Layouts";
import { H3 } from "../../styles/Titles";

interface BlogItemProps {
  name: string;
  intro: string;
}
export default function BlogItem({ name, intro }: BlogItemProps) {
  return (
    <Container>
      <H3>{name}</H3>
      <Intro>{intro}</Intro>
    </Container>
  );
}
