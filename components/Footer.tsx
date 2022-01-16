import React from "react";
import Link from "next/link";

import { H3 } from "../styles/Titles";
import {
  Container,
  Footer as HtmlFooter,
  LinkGroup,
  Links,
  A,
} from "../styles/componentStyles/Footer";
import { PageLayout } from "../styles/Layouts";
import StoreButtons from "./StoreButtons";

export default function Footer() {
  return (
    <>
      <PageLayout isSection>
        <HtmlFooter>
          <Container>
            <H3>Get Rodi now.</H3>
            <StoreButtons analyticsCategory="footer section" />
          </Container>
          <Links>
            <LinkGroup>
              <Link href="/blog" passHref={true}>
                <A target="_blank">Learn how and why Rodi is built</A>
              </Link>
              <Link href="/upload" passHref={true}>
                <A target="_blank">Upload a route</A>
              </Link>
            </LinkGroup>
            <LinkGroup>
              <Link href="https://www.instagram.com/rodi_app" passHref={true}>
                <A target="_blank">Instagram</A>
              </Link>
              <Link
                href="https://www.linkedin.com/company/rodi-app"
                passHref={true}
              >
                <A target="_blank">LinkedIn</A>
              </Link>
            </LinkGroup>
            <LinkGroup>
              <Link href="/terms" passHref={true}>
                <A target="_blank">Terms and conditions</A>
              </Link>
              <Link href="/privacy" passHref={true}>
                <A target="_blank">Privacy policy</A>
              </Link>
            </LinkGroup>
          </Links>
        </HtmlFooter>
      </PageLayout>
    </>
  );
}
