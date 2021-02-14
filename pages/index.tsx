import { useEffect, useState } from "react";

import { initGA } from "../utils/analytics";

import Header from "../components/Header";
import Features from "../components/Features";
import Screen from "../components/Screen";
import Download from "../components/Download";
import Journey from '../components/Journey'

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
      <Header />
      <Features startTime={startTime} />
      <Screen />
      <Download />
      <Journey/>
    </ScreenWidth>
  );
}
