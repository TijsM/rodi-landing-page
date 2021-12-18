import React from "react";
import Image from "next/image";

import {
  Container,
  Results,
} from "../../styles/componentStyles/features/Search";
import {
  InputLabel,
  InputContainer,
  InputText,
  Divider,
} from "../../styles/componentStyles/features/Input";
import {
  Title,
  Location,
  ResultContainer,
  TextContainer,
  ImageContainer,
} from "../../styles/componentStyles/features/SearchResult";

const SEARCH_RESULTS = [
  {
    title: "Ghent City hall",
    location: "Botermarkt, Ghent",
  },
  {
    title: "Ghent City Museum - STAM",
    location: "Godshuizenlaan 2, Ghent",
  },
  {
    title: "Ghent University",
    location: "Coorneel Heymanslaan, Ghent",
  },
  {
    title: "Saint Michael's Church",
    location: "Sint-Michielsplein 4, Ghent",
  },
  {
    title: "Ghent River Hotel",
    location: "Waaistraat, Ghent",
  },
  {
    title: "Ghent Mariott Hotel",
    location: "Korenlei, Ghent",
  },
];

export function Search() {
  return (
    <Container>
      <InputField />
      <Results>
        {SEARCH_RESULTS.map((res) => (
          <SearchResult key={res.title} {...res} />
        ))}
      </Results>
    </Container>
  );
}

function InputField() {
  return (
    <InputContainer>
      <InputLabel>Where do you want to go?</InputLabel>
      <InputText>Ghent</InputText>
      <Divider />
    </InputContainer>
  );
}

interface SearchResultProps {
  title: string;
  location: string;
}
function SearchResult({ title, location }: SearchResultProps) {
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
