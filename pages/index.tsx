import Header from "../components/Header";
import Features from "../components/Features";
import Screen from "../components/Screen";
import Download from "../components/Download";

import { ScreenWidth } from "../styles/Layouts";
import { useEffect, useState } from "react";

export default function Home() {
  const [startTime, setStartTime] = useState<Date | undefined>();

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  return (
    <ScreenWidth>
      <Header />
      <Features startTime={startTime} />
      <Screen />
      <Download />
    </ScreenWidth>
  );
}
