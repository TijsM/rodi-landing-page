import { useMemo } from "react";
import Header from "../../components/blog/Header";
import { H2, H3, Paragraph } from "../../styles/componentStyles/Blog/BlogPage";
import { PageLayout } from "../../styles/Layouts";
import { getPage } from "../api/blog/[blogUrl]";

export default function Blog({ blog }) {
  const blogContent = useMemo(() => {
    return blog?.content?.map((block) => {
      if (block.type === "paragraph") {
        return <Paragraph>{block.paragraph.text[0]?.plain_text}</Paragraph>;
      } else if (block.type === "heading_1") {
        return <H2>{block.heading_1.text[0]?.plain_text}</H2>;
      } else if (block.type === "heading_2") {
        return <H3>{block.heading_2.text[0]?.plain_text}</H3>;
      } else if (block.type === "bulleted_list_item") {
        return null;
      } else if (block.type === "image") {
        return null;
      }

      return null;
    });
  }, [blog]);

  return (
    <>
      <Header title={blog.title} intro={blog.intro} />
      <PageLayout>{blogContent}</PageLayout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const blog = await getPage(query.blogUrl);
  return {
    props: { blog },
  };
}
