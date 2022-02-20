import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Features from "../components/Features";

import Footer from "../components/Footer";
import OpenDeepLink from "../components/OpenDeepLink";
import SeoHeaders from "../components/SeoHeaders";
import { useLogPageView } from "../utils/analytics";

export default function Open() {
  const router = useRouter();
  const [startTime, setStartTime] = useState<Date | undefined>();
  useLogPageView();

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  const openDeepLink = () => {
    if (router.query.lat && router.query.lon) {
      router.push(
        `rodi://openCoordinate/?lat=${router.query.lat}&lon=${router.query.lon}`
      );
    }
  };

  useEffect(openDeepLink, [router.query, router.query]);

  return (
    <>
      <SeoHeaders
        description={
          "Download Rodi on iOS. Rodi is a free app that gives you more insights in your bike rides"
        }
      />
      <OpenDeepLink onClick={openDeepLink} />
      <Features startTime={startTime} />
      <Footer />
    </>
  );
}
