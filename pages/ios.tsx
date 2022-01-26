import { useLogPageView } from "../utils/analytics";

import SeoHeaders from "../components/SeoHeaders";
import { useEffect } from "react";

export default function Ios() {
  useLogPageView();

  useEffect(() => {
    window.location.href = "https://apps.apple.com/us/app/rodi/id1570964762";
  }, []);

  return (
    <>
      <SeoHeaders
        description={
          "Download Rodi on iOS. Rodi is a free app that gives you more insights in your bike rides"
        }
      />
    </>
  );
}
