import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { useRouter } from "next/router";

import { PageLayout } from "../../styles/Layouts";
import { Story } from "../api/stories";

import Stories from "react-insta-stories";
import { H1 as defaultH1 } from "../../styles/Titles";

const Layout = styled(PageLayout)`
  margin: 0px;
  padding: 0px;
  background-color: ${(props) => props.theme.dark};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const H1 = styled(defaultH1)`
  font-size: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: auto;
  box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.25);
`;
export default function StoryDetail() {
  const [storyData, setStoryData] = useState<Story>(undefined);
  const router = useRouter();
  const { id } = router.query;
  const theme = useTheme();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/stories/" + id);
      const data = await res.json();

      setStoryData(data);
    };

    if (id) {
      getData();
    }
  }, [id]);

  if (!storyData) {
    return null;
  }

  return (
    <Layout>
      <Container>
        <Stories
          stories={(storyData?.images || []).map((image) => ({
            url: image,
          }))}
          loop={true}
          defaultInterval={5000}
          storyContainerStyles={{ backgroundColor: theme.dark }}
        />
      </Container>
    </Layout>
  );
}
