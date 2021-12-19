import React from "react";
import Image from "next/image";

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
}

export default function SearchResult({ title, location }: SearchResultProps) {
  return (
    <ResultContainer>
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
