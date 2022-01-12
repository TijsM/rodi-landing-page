import React from "react";
import { Container } from "../../styles/componentStyles/Blog/BlogPosts";
import { PageLayout } from "../../styles/Layouts";
import { H2 } from "../../styles/Titles";
import BlogItem from "./BlogItem";

interface BlogPostsProps {
  pages: any[];
}
export default function BlogPosts({ pages }: BlogPostsProps) {
  return (
    <Container>
      <PageLayout>
        <H2>Insights</H2>
      </PageLayout>
      <PageLayout ignoreVHeight>
        {pages &&
          pages?.map((page) => {
            return (
              <BlogItem
                key={page.id}
                name={page.properties.Name.title[0].plain_text}
                intro={page.properties.Intro.rich_text[0].plain_text}
              />
            );
          })}
      </PageLayout>
    </Container>
  );
}
