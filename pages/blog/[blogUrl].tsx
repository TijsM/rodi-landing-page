import { useMemo } from "react";
import { CodeBlock, a11yLight } from "react-code-blocks";

import { getPage } from "../api/blog/[blogUrl]";

import Header from "../../components/blog/Header";
import ListItem from "../../components/blog/ListItem";
import Footer from "../../components/Footer";

import {
  H2,
  H3,
  StyledImage,
  ImageContainer,
  H4,
} from "../../styles/componentStyles/Blog/BlogPage";
import { PageLayout } from "../../styles/Layouts";
import { useLogPageView } from "../../utils/analytics";
import SeoHeaders from "../../components/SeoHeaders";
import Paragraph from "../../components/blog/Paragraph";
import { getBlog } from "../api/blog/getPages";

export default function Blog({ blog }) {
  useLogPageView();
  const blogContent = useMemo(() => {
    return blog?.content?.map((block) => {
      switch (block.type) {
        case "paragraph":
          return <Paragraph block={block} key={block.id} />;
        case "heading_1":
          return <H2 key={block.id}>{block.heading_1.text[0]?.plain_text}</H2>;
        case "heading_2":
          return <H3 key={block.id}>{block.heading_2.text[0]?.plain_text}</H3>;
        case "heading_3":
          return <H4 key={block.id}>{block.heading_3.text[0]?.plain_text}</H4>;
        case "bulleted_list_item":
          return <ListItem block={block} key={block.id} />;
        case "image":
          console.log(block.image.file.url)
          return (
            <ImageContainer key={block.id}>
              <StyledImage
                src={block.image.file.url}
                layout="fill"
                objectFit="contain"
              />
            </ImageContainer>
          );
        case "code":
          return (
            <CodeBlock
              key={block.id}
              text={block.code.text[0].plain_text}
              language={block.code.language}
              theme={a11yLight}
            />
          );
        default:
          return null;
      }
    });
  }, [blog]);

  return (
    <>
      <SeoHeaders description={blog.intro} />
      <Header title={blog.title} intro={blog.intro} />
      <PageLayout>{blogContent}</PageLayout>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const blog = await getPage(params.blogUrl);

  return {
    props: { blog },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const pages = await getBlog();

  const paths = pages.map((blog) => {
    return {
      params: { blogUrl: blog.properties.Url.rich_text[0].plain_text },
    };
  });

  return { paths, fallback: "blocking" };
}
