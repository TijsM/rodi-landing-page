import React, { useEffect, useState } from "react";

import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Statistics from "../components/Statistics";
import DownloadPopup from "../components/DownloadPopup";

import { PageLayout } from "../styles/Layouts";
import { H3 } from "../styles/Titles";
import {
  ImageContainer,
  TextContainer,
  FeatureDescription,
  FeatureBlock,
} from "../styles/componentStyles/Features";

import { LinkButton } from "../styles/LinkButton";

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
  const [showPopup, setShowPopup] = useState(false);

  const features: Feature[] = [
    {
      title: "Course navigation",
      // description:
      //   "Have a favorite route? Or don't now the area? Upload a route to --link-- and don't miss a turn on your next ride.",
      description: "Do you have a favorite route? Or don't have a clue where to go? find a route online and upload it to --link--. Rodi will guide you with directions so you won't miss a turn.",
      link: { url: "rodi.app/tracks", text: "test" },
      illustration: {
        type: "image",
        src: "/images/feature-map.png",
        alt: "map example",
      },
    },
    {
      title: "Track your performance",
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
        "From the moment you finnish the ride on Rodi, we will upload your route with your friends on Strava.",
      illustration: {
        type: "image",
        src: "/images/feature-strava.png",
        alt: "map example",
      },
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    registerExplenationAnimation("#text0");
    registerExplenationAnimation("#text1");
    registerExplenationAnimation("#text2");
  }, []);

  const registerExplenationAnimation = (id: string) => {
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
              <LinkButton onClick={() => setShowPopup(true)}>
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
        {features.map((feature, i) => {
          const leftAllign = !!(i % 2);
          return (
            <FeatureBlock key={i}>
              <ImageContainer leftAlign={leftAllign}>
                {renderIllustration(feature.illustration)}
              </ImageContainer>
              <TextContainer leftAlign={leftAllign} id={"text" + i}>
                <H3>{feature.title}</H3>
                {getTextWithLink(feature)}
              </TextContainer>
            </FeatureBlock>
          );
        })}
      </PageLayout>
      {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
