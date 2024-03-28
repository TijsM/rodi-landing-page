import React, { useEffect } from "react";

import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Statistics from "./features/Statistics";

import { PageLayout } from "../styles/Layouts";
import { H3 } from "../styles/Titles";
import {
  ImageContainer,
  TextContainer,
  FeatureDescription,
  FeatureBlock,
  H2,
} from "../styles/componentStyles/Features";

import { LinkButton } from "../styles/LinkButton";
import { Search } from "./features/Search";

type Props = {
  startTime: Date;
};

type Feature = {
  title: string;
  description: string;
  link?: { url: string; text: string };
  illustration: {
    type: string;
    src: string;
    alt: string;
  };
};

export default function Features({ startTime }: Props) {
  const features: Feature[] = [
    {
      title: "Never mis a turn on your route",
      description:
        "Do you have a favorite route? Or don't have a clue where to go? Find a route online and upload it to --link--. Rodi will guide you with directions so you won't miss a turn.",
      link: { url: "rodi.app/upload", text: "test" },
      illustration: {
        type: "image",
        src: "/images/feature-map.png",
        alt: "map example",
      },
    },
    {
      title: "Find your places",
      description:
        "You haven’t planned a route? No problem, Rodi has your back. Search for any location and Rodi will create a bike-friendly route for you.",
      illustration: {
        type: "search",
        src: "/images/feature-map.png",
        alt: "map example",
      },
    },
    {
      title: "Get insights in your activities",
      description:
        "Rodi tracks your ride on the go. We use the gps sensor of your phone to display the valuable insights of your trip.",
      illustration: {
        type: "stats",
        src: "/images/feature-stats.png",
        alt: "map example",
      },
    },
    {
      title: '"Strava or didn’t happen"',
      description:
        "From the moment you finish the ride on Rodi, we will upload your route with your friends on Strava.",
      illustration: {
        type: "image",
        src: "/images/feature-strava.png",
        alt: "map example",
      },
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    registerExplanationAnimation("#text0");
    registerExplanationAnimation("#text1");
    registerExplanationAnimation("#text2");
  }, []);

  const registerExplanationAnimation = (id: string) => {
    gsap.from(id, {
      y: 150,
      duration: 4,
      ease: "ease",
      scrollTrigger: {
        trigger: id,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  const renderIllustration = (illustration) => {
    if (illustration.type === "stats") {
      return <Statistics startTime={startTime} />;
    } else if (illustration.type === "search") {
      return <Search />;
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

  const getTextWithLink = (feature: Feature) => {
    const splitted = feature.description.split(
      new RegExp("(--link--" + "+)", "i")
    );

    return (
      <FeatureDescription>
        {splitted.map((text, i) => {
          if (i % 2 == 0) {
            return text;
          } else {
            return (
              <LinkButton
                key={i}
                onClick={() => window.open("https://rodi.app/upload")}
              >
                {feature.link.url}
              </LinkButton>
            );
          }
        })}
      </FeatureDescription>
    );
  };

  return (
    <>
      <PageLayout id="features" isSection>
        <H2>This is how Rodi improves your next ride.</H2>
        {features.map((feature, i) => {
          const leftAlign = !!(i % 2);
          return (
            <FeatureBlock key={i}>
              <ImageContainer leftAlign={leftAlign}>
                {renderIllustration(feature.illustration)}
              </ImageContainer>
              <TextContainer leftAlign={leftAlign} id={"text" + i}>
                <H3>{feature.title}</H3>
                {getTextWithLink(feature)}
              </TextContainer>
            </FeatureBlock>
          );
        })}
      </PageLayout>
    </>
  );
}
