import { getBlog } from "../api/blog/getPages";

import { useLogPageView } from "../../utils/analytics";

import SeoHeaders from "../../components/SeoHeaders";
import Header from "../../components/blog/Header";
import BlogPosts from "../../components/blog/BlogPosts";
import Stories from "../../components/Stories";
import Footer from "../../components/Footer";

export default function Blog(props) {
  useLogPageView();

  return (
    <>
      <SeoHeaders
        description={
          "Learn how and why we built a mobile application for cycling"
        }
      />
      <Header title={"Learn how and why Rodi is built."} />
      <BlogPosts pages={props.pages} />
      {/* <Stories wrapContent={true} /> */}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const pages = await getBlog();
  return {
    props: { pages },
  };
}
