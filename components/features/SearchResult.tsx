import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import {
  Title,
  Location,
  ResultContainer,
  TextContainer,
  ImageContainer,
} from "../../styles/componentStyles/features/SearchResult";

interface SearchResultProps {
  title: string;
  location: string;
  index: number;
}

export default function SearchResult({
  title,
  location,
  index,
}: SearchResultProps) {
  const container = useRef();

  const mounAnimation = () => {
    const tl = gsap.timeline();

    tl.to(container.current, {
      duration: 0,
      opacity: 1,
    }).from(container.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.05 * index,
      x: 30,
    });
  };

  useEffect(() => {
    mounAnimation();
  }, []);

  return (
    <ResultContainer ref={container}>
      <TextContainer>
        <Title>{title}</Title>
        <Location>{location}</Location>
      </TextContainer>
      <ImageContainer width={24} height={24}>
        <Image
          src="/images/chevron.png"
          alt="strava logo"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
    </ResultContainer>
  );
}
