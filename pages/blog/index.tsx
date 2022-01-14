import { getBlog } from "../api/blog/getPages";

import Header from "../../components/blog/Header";
import BlogPosts from "../../components/blog/BlogPosts";
import Stories from "../../components/Stories";
import Footer from "../../components/Footer";

export default function Blog(props) {
  return (
    <>
      <Header title={"Learn how and why Rodi is built."} />
      <BlogPosts pages={props.pages} />
      <Stories wrap={true} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const pages = await getBlog();
  return {
    props: { pages: pages.results },
  };
}
