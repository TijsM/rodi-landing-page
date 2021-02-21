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

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
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
