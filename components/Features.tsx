import React from "react";

import Image from "next/image";

import { PageLayout } from "../styles/Layouts";
import { H3 } from "../styles/Titles";
import {
  ImageContainer,
  TextContainer,
  FeatureDescription,
} from "../styles/pageStyles/Features";

export default function Features() {
  return (
    <PageLayout>
      <ImageContainer>
        <Image
          src="/images/navigation-map.png"
          alt="map example"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <TextContainer>
        <H3>Course navigation</H3>
        <FeatureDescription>
          Have a favorite route? Or don't now the area? Upload a route to
          Rodi.com/tracks and don't miss a turn on your next ride.
        </FeatureDescription>
      </TextContainer>
    </PageLayout>
  );
}
