import { link } from "fs";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Download from "../components/Download";
import Features from "../components/Features";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SeoHeaders from "../components/SeoHeaders";
import { PageLayout } from "../styles/Layouts";
import { useLogPageView } from "../utils/analytics";

export default function Open() {
  const router = useRouter();
  const [startTime, setStartTime] = useState<Date | undefined>();
  useLogPageView();

  const linkRef = useRef();

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    location.href = "rodi://openCoordinate/?lat=51.0543422&lon=3.7174243";
    router.push("rodi://openCoordinate/?lat=51.0543422&lon=3.7174243");
  }, [router.query]);

  return (
    <>
      <SeoHeaders
        description={
          "Download Rodi on iOS. Rodi is a free app that gives you more insights in your bike rides"
        }
      />

      <Header />

      <Download />
      <Features startTime={startTime} />

      <PageLayout></PageLayout>
      <Footer />
    </>
  );
}
