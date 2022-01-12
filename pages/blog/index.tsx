import Header from "../../components/blog/Header";
import { getBlog } from "../api/blog/getPages";
import BlogPosts from "../../components/blog/BlogPosts";
import Stories from "../../components/Stories";

export default function Blog(props) {
  return (
    <>
      <Header title={"Learn how and why Rodi is built."} />
      <BlogPosts pages={props.pages} />
      <Stories wrap={true} />
    </>
  );
}

export async function getServerSideProps(context) {
  const pages = await getBlog();
  return {
    props: { pages: pages.results },
  };
}
