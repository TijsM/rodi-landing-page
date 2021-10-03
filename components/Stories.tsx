import React, { useState } from "react";

import { logEvent } from "../utils/analytics";

import { Apple, Play } from "../components/storeButtons/Index";
import DownloadPopup from "../components/DownloadPopup";

import { H2, H3 } from "../styles/Titles";
import { Container, DownloadButtons } from "../styles/componentStyles/Footer";
import { PageLayout } from "../styles/Layouts";

export default function Stories() {
  return (
    <PageLayout>
      <H2>Learn more!</H2>
    </PageLayout>
  );
}
