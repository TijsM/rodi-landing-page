import { useEffect, useState } from "react";
import { initGA, logPageView } from "../utils/analytics";
import { useRouter } from "next/router";

import Headers from "../components/SeoHeaders";

import IntroOverlay from "../components/IntroOverlay";
import Header from "../components/Header";
import Features from "../components/Features";
import Screen from "../components/Screen";
import Download from "../components/Download";
import Journey from "../components/Journey";
import Footer from "../components/Footer";

import { ScreenWidth } from "../styles/Layouts";

export default function Home() {
  const [startTime, setStartTime] = useState<Date | undefined>();
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  // redirect to the app after authentication on strava app
  useEffect(() => {
    const code = router.query?.code;
    if (code) {
      window.location = "rodi://stravaAuthSuccess?code="+code;
    }
  }, []);


  return (
    <>
      <Headers />
      <ScreenWidth>
        <IntroOverlay />
        <Header />
        <Features startTime={startTime} />
        <Screen />
        <Download />
        <Journey />
        <Footer />
      </ScreenWidth>
    </>
  );
}
