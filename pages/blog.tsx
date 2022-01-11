import Header from "../components/blog/Header";
import { getBlog } from "./api/blog/getPages";
import BlogItem from "../components/blog/BlogItem";
import BlogPosts from "../components/blog/blogPosts";

export default function Blog(props) {
  return (
    <>
      <Header />
      <BlogPosts pages={props.pages} />
    </>
  );
}

export async function getServerSideProps(context) {
  const pages = await getBlog();
  return {
    props: { pages: pages.results },
  };
}
