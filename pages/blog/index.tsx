import { getBlog } from "../api/blog/getPages";

import Header from "../../components/blog/Header";
import BlogPosts from "../../components/blog/BlogPosts";
import Stories from "../../components/Stories";
import Footer from "../../components/Footer";
import { useLogPageView } from "../../utils/analytics";

export default function Blog(props) {
  useLogPageView();

  return (
    <>
      <Header title={"Learn how and why Rodi is built."} />
      <BlogPosts pages={props.pages} />
      <Stories wrapContent={true} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const pages = await getBlog();
  return {
    props: { pages },
  };
}
