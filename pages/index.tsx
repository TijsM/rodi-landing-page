import { useEffect, useState } from "react";
import Head from "next/head";
import { initGA } from "../utils/analytics";

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

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  return (
    <ScreenWidth>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Rodi",
              operatingSystem: ["ANDROID", "iOS"],
              applicationCategory: "SportsApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
            }),
          }}
        />
      </Head>
      <IntroOverlay />
      <Header />
      <Features startTime={startTime} />
      <Screen />
      <Download />
      <Journey />
      <Footer />
    </ScreenWidth>
  );
}
