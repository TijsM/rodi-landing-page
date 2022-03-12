import { useLogPageView } from "../utils/analytics";

import SeoHeaders from "../components/SeoHeaders";
import { useEffect } from "react";

export default function Assets() {
  useLogPageView();

  useEffect(() => {
    window.location.href =
      "https://drive.google.com/drive/folders/1IFmle-ajpCFjklkpztO1e7BLzAOy_rRJ?usp=sharing";
  }, []);

  return (
    <>
      <SeoHeaders
        description={
          "Download Rodi on iOS or Android. Rodi is a free app that gives you more insights in your bike rides"
        }
      />
    </>
  );
}
