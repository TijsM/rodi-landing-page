import React, { useEffect, useState } from "react";
import Link from "next/link";

import { H2 } from "../styles/Titles";
import { PageLayout } from "../styles/Layouts";
import {
  StoriesContainer,
  StoryCard,
  H4,
  Context,
} from "../styles/componentStyles/Stories";

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
      <StoriesContainer>
        {stories.map((story) => {
          return (
            <Link href={"/story/" + story.id} key={story.id}>
              <StoryCard>
                <H4>{story.title}</H4>
                <Context>{story.context}</Context>
              </StoryCard>
            </Link>
          );
        })}
      </StoriesContainer>
    </PageLayout>
  );
}
