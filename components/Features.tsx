import React from "react";

import Image from "next/image";

import Statistics from '../components/Statistics'

import { PageLayout } from "../styles/Layouts";
import { H3 } from "../styles/Titles";
import {
  ImageContainer,
  TextContainer,
  FeatureDescription,
  FeatureBlock,
} from "../styles/componentStyles/Features";

type Props = {
  startTime: Date
}

export default function Features({startTime}: Props) {
  const features = [
    {
      title: "Course navigation",
      description:
        "Have a favorite route? Or don't now the area? Upload a route to Rodi.com/tracks and don't miss a turn on your next ride.",
      illustration: {
        type: "image",
        src: "/images/feature-map.png",
        alt: "map example",
      },
    },
    {
      title: "Track your performance",
      description:
        "Rodi tracks your ride on the go. We use the gps sensor of your phone to display these valuable insights of your trip.",
      illustration: {
        type: "stats",
        src: "/images/feature-stats.png",
        alt: "map example",
      },
    },
    {
      title: '"Strava or didn’t happen"',
      description:
        "From the moment you finnish the ride on Rodu, we will upload your route with your friends on Strava.",
      illustration: {
        type: "image",
        src: "/images/feature-strava.png",
        alt: "map example",
      },
    },
  ];

  const renderIllustration = (illustration) => {
    if (illustration.type === "stats") {
      return <Statistics startTime={startTime}/>;
    } else {
      return (
        <Image
          src={illustration.src}
          alt={illustration.alt}
          layout="fill"
          objectFit="cover"
        />
      );
    }
  };

  return (
    <PageLayout id="features">
      {features.map((feature, i) => {
        const leftAllign = !!(i % 2);
        return (
          <FeatureBlock key={i}>
            <ImageContainer leftAlign={leftAllign}>
              {renderIllustration(feature.illustration)}
            </ImageContainer>
            <TextContainer leftAlign={leftAllign}>
              <H3>{feature.title}</H3>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </TextContainer>
          </FeatureBlock>
        );
      })}
    </PageLayout>
  );
}
