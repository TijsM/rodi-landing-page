import { useEffect, useState } from "react";

import { useLogPageView } from "../utils/analytics";
import useStravaAuth from "../hooks/useStravaAuth";

import SeoHeaders from "../components/SeoHeaders";

import IntroOverlay from "../components/IntroOverlay";
import Header from "../components/Header";
import Features from "../components/Features";
import Screen from "../components/Screen";
import Download from "../components/Download";
import Journey from "../components/Journey";
import Stories from "../components/Stories";
import Footer from "../components/Footer";

import { ScreenWidth } from "../styles/Layouts";

export default function Home() {
  const [startTime, setStartTime] = useState<Date | undefined>();
  useStravaAuth();
  useLogPageView();

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  return (
    <>
      <SeoHeaders
        description={
          "Rodi is a free app that functions as a bike computer showing the route and statistics of your trip"
        }
      />
      <ScreenWidth>
        <IntroOverlay />
        <Header />
        <Features startTime={startTime} />
        <Screen />
        <Download />
        <Journey />
        {/* <Stories /> */}
        <Footer />
      </ScreenWidth>
    </>
  );
}
