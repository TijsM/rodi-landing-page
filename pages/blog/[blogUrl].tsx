import { useMemo } from "react";
import { CodeBlock, CopyBlock } from "react-code-blocks";

import { getPage } from "../api/blog/[blogUrl]";

import Header from "../../components/blog/Header";
import ListItem from "../../components/blog/ListItem";
import Footer from "../../components/Footer";

import {
  A,
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
      switch (block.type) {
        case "paragraph":
          return (
            <Paragraph key={block.id}>
              {block.paragraph.text.map((text) => {
                if (text.href) {
                  return (
                    <A key={text.text.content} href={text.href}>
                      {text.text.content}
                    </A>
                  );
                }
                return text.text.content;
              })}
            </Paragraph>
          );

        case "heading_1":
          return <H2 key={block.id}>{block.heading_1.text[0]?.plain_text}</H2>;
        case "heading_2":
          return <H3 key={block.id}>{block.heading_2.text[0]?.plain_text}</H3>;
        case "bulleted_list_item":
          return <ListItem block={block} key={block.id} />;
        case "image":
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
            />
          );
        default:
          return null;
      }
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
