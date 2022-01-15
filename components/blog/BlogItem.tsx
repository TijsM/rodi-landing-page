import React from "react";
import Link from "next/link";

import { A, Intro, Content } from "../../styles/componentStyles/Blog/BlogItem";
import { H3 } from "../../styles/Titles";

interface BlogItemProps {
  name: string;
  intro: string;
  url: string;
}
export default function BlogItem({ name, intro, url }: BlogItemProps) {
  return (
    <Link href={"/blog/" + url}>
      <A>
        <Content>
          <H3>{name}</H3>
          <Intro>{intro}</Intro>
        </Content>
      </A>
    </Link>
  );
}
