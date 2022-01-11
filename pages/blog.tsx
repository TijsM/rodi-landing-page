import { getBlog } from "./api/blog/getPages";

export default function Blog(props) {
  console.log(props);
  return <div>here</div>;
}

export async function getServerSideProps(context) {
  const pages = await getBlog();
  console.log(pages);
  return {
    props: { pages }, // will be passed to the page component as props
  };
}
