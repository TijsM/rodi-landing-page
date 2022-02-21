import Footer from "../../../components/Footer";
import Header from "../../../components/blog/Header";
import SeoHeaders from "../../../components/SeoHeaders";
import {
  H2,
  H3,
  StyledImage,
  ImageContainer,
  H4,
} from "../../../styles/componentStyles/Blog/BlogPage";
import { PageLayout } from "../../../styles/Layouts";
import { H1 } from "../../../styles/Titles";
import { a11yLight, CodeBlock } from "react-code-blocks";
import { Paragraph } from "../../../components/docs/Link";

export default function Link() {
  return (
    <>
      <SeoHeaders description={""} />
      <Header
        title={"Open a coordinate in "}
        intro={
          "Rodi can open a coordinate from any website or other app. Rodi will first show this coordinate on the map and give the user the option to navigate to this point."
        }
      />

      <PageLayout>
        <H2>Link with fallback</H2>
        <Paragraph>
          Will open Rodi using the users default browser, if something went
          wrong, or the user doesn't have Rodi installed, more info will be
          shown.
        </Paragraph>
        <H3>Code:</H3>
        <CodeBlock
          text="https://rodi.app/open?lat=<LATITUDE>&lon=<LONGITUDE>"
          showLineNumbers={false}
        />
        <H2>Link without fallback</H2>
        <Paragraph isUnderlined>
          Not recommended, use with caution. If the user does not have Rodi
          installed, nothing will happen.
        </Paragraph>
        <Paragraph>Will open Rodi if it's installed</Paragraph>
        <Paragraph>
          Open this link like you would open any other link.
        </Paragraph>
        <H3>Code:</H3>
        <CodeBlock
          text="rodi://openCoordinate/?lat=<LATITUDE>&lon=<LONGITUDE>"
          showLineNumbers={false}
        />
      </PageLayout>
      <Footer />
    </>
  );
}
