import { useRouter } from "next/router";
import { useEffect } from "react";

import Footer from "../components/Footer";
import SeoHeaders from "../components/SeoHeaders";
import { PageLayout } from "../styles/Layouts";

export default function Open() {
  const router = useRouter();

  useEffect(() => {
    router.push("rodi://openCoordinate/?lat=51.0543422&lon=3.7174243");
  }, [router.query]);

  return (
    <>
      <SeoHeaders
        description={
          "Download Rodi on iOS. Rodi is a free app that gives you more insights in your bike rides"
        }
      />
      {/* <Header title={blog.title} intro={blog.intro} /> */}
      <PageLayout></PageLayout>
      <Footer />
    </>
  );
}
