import React from "react";

import { H3 } from "../styles/Titles";
import { Container } from "../styles/componentStyles/Footer";
import { PageLayout } from "../styles/Layouts";
import StoreButtons from "./StoreButtons";

export default function Footer() {
  return (
    <>
      <PageLayout isSection>
        <Container>
          <H3>Get Rodi now.</H3>
          <StoreButtons analyticsCategory="footer section" />
        </Container>
      </PageLayout>
    </>
  );
}
