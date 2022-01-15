import { useMemo } from "react";

import { getPage } from "../api/blog/[blogUrl]";

import Header from "../../components/blog/Header";
import ListItem from "../../components/blog/ListItem";
import Footer from "../../components/Footer";

import {
  H2,
  H3,
  Paragraph,
  StyledImage,
  ImageContainer,
} from "../../styles/componentStyles/Blog/BlogPage";
import { PageLayout } from "../../styles/Layouts";
import { useLogPageView } from "../../utils/analytics";

export default function Blog({ blog }) {
  useLogPageView();
  const blogContent = useMemo(() => {
    return blog?.content?.map((block) => {
      if (block.type === "paragraph") {
        return <Paragraph>{block.paragraph.text[0]?.plain_text}</Paragraph>;
      } else if (block.type === "heading_1") {
        return <H2>{block.heading_1.text[0]?.plain_text}</H2>;
      } else if (block.type === "heading_2") {
        return <H3>{block.heading_2.text[0]?.plain_text}</H3>;
      } else if (block.type === "bulleted_list_item") {
        return <ListItem block={block} />;
      } else if (block.type === "image") {
        return (
          <ImageContainer>
            <StyledImage
              src={block.image.file.url}
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
        );
      }

      return null;
    });
  }, [blog]);

  return (
    <>
      <Header title={blog.title} intro={blog.intro} />
      <PageLayout>{blogContent}</PageLayout>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const blog = await getPage(query.blogUrl);
  return {
    props: { blog },
  };
}
