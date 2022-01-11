import React from "react";
import { Container, Content } from "../../styles/componentStyles/Blog/Header";
import { PageLayout } from "../../styles/Layouts";
import { H1 } from "../../styles/Titles";

export default function Header() {
  return (
    <Container>
      <PageLayout>
        <Content>
          <H1>Learn how and why Rodi is built.</H1>
        </Content>
      </PageLayout>
    </Container>
  );
}
