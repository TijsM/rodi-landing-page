import { link } from "fs";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Download from "../components/Download";
import Features from "../components/Features";

import Footer from "../components/Footer";
import OpenDeepLink from "../components/OpenDeepLink";
import SeoHeaders from "../components/SeoHeaders";
import { PageLayout } from "../styles/Layouts";
import { useLogPageView } from "../utils/analytics";

export default function Open() {
  const router = useRouter();
  const [startTime, setStartTime] = useState<Date | undefined>();
  useLogPageView();

  useEffect(() => {
    setStartTime(new Date());
  }, []);

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
      <OpenDeepLink />

      <Features startTime={startTime} />

      <PageLayout></PageLayout>
      <Footer />
    </>
  );
}
