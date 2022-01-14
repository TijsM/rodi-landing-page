import React from "react";

import { logEvent, AnalyticsCategories } from "../utils/analytics";

import { Apple, Play } from "../components/storeButtons/Index";

import { DownloadButtons } from "../styles/componentStyles/StoreButtons";

interface StoreButtonsProps {
  analyticsCategory: AnalyticsCategories;
}

export default function StoreButtons({ analyticsCategory }: StoreButtonsProps) {
  const onClick = (platform: "ios" | "android") => {
    const androidUrl =
      "https://play.google.com/store/apps/details?id=com.gpxtrackerrnapp";

    const iosUrl = "https://apps.apple.com/us/app/rodi/id1570964762";

    logEvent({
      category: analyticsCategory,
      event: {
        type: "click",
        name: `Download ${platform}`,
      },
    });

    platform === "android" && window.open(androidUrl);
    platform === "ios" && window.open(iosUrl);
  };

  return (
    <>
      <DownloadButtons>
        <Apple width={165} height={60} onClick={() => onClick("ios")} />
        <Play width={165} height={60} onClick={() => onClick("android")} />
      </DownloadButtons>
    </>
  );
}
