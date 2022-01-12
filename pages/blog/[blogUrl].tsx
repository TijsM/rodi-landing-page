import { useMemo } from "react";
import Header from "../../components/blog/Header";
import { getPage } from "../api/blog/[blogUrl]";

export default function Blog({ blog }) {
  // console.log(blog);

  const blogContent = useMemo(() => {
    return blog?.content?.map((block) => {
      return null;
    });
  }, [blog]);

  return (
    <>
      <Header title={blog.title} intro={blog.intro} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const blog = await getPage(query.blogUrl);
  return {
    props: { blog },
  };
}
