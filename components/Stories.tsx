import React, { useEffect, useState } from "react";

import { H2 } from "../styles/Titles";
import { PageLayout } from "../styles/Layouts";
import { Story } from "../pages/api/stories";

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/stories");
      const data = await res.json();

      setStories(data);
    };

    getData();
  }, []);

  return (
    <PageLayout>
      <H2>Learn more!</H2>
    </PageLayout>
  );
}
