import Header from "../components/Header";
import Features from "../components/Features";

import {ScreenWidth} from '../styles/Layouts'

export default function Home() {
  return (
    <ScreenWidth>
      <Header />
      <Features/>
    </ScreenWidth>
  );
}
