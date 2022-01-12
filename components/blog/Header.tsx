import React from "react";
import {
  Container,
  Content,
  Intro,
} from "../../styles/componentStyles/Blog/Header";
import { PageLayout } from "../../styles/Layouts";
import { H1 } from "../../styles/Titles";

interface HeaderProps {
  title: string;
  intro?: string;
}
export default function Header({ title, intro }: HeaderProps) {
  return (
    <Container>
      <PageLayout>
        <Content>
          <H1>{title}</H1>
          <Intro>{intro}</Intro>
        </Content>
      </PageLayout>
    </Container>
  );
}
