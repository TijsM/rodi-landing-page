import Header from "../components/Header";
import Features from "../components/Features";
import Screen from '../components/Screen'
import Download from '../components/Download'

import {ScreenWidth} from '../styles/Layouts'

export default function Home() {
  return (
    <ScreenWidth>
      <Header />
      <Features/>
      <Screen/>
      <Download/>
    </ScreenWidth>
  );
}
