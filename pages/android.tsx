import { useLogPageView } from "../utils/analytics";

import SeoHeaders from "../components/SeoHeaders";
import { useEffect } from "react";

export default function Ios() {
  useLogPageView();

  useEffect(() => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.gpxtrackerrnapp";
  }, []);

  return (
    <>
      <SeoHeaders
        description={
          "Download Rodi on Android. Rodi is a free app that gives you more insights in your bike rides"
        }
      />
    </>
  );
}
