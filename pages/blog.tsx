import Header from "../components/blog/Header";
import { getBlog } from "./api/blog/getPages";

export default function Blog(props) {
  return <Header></Header>;
}

export async function getServerSideProps(context) {
  const pages = await getBlog();
  return {
    props: { pages },
  };
}
