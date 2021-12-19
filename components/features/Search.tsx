import React, { useEffect, useRef, useState } from "react";
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

const INPUTS = ["G", "Gh", "Ghe", "Ghen", "Ghent"];

export function Search() {
  const [scroll, setScroll] = useState<number>();
  const containerRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    handlePosition();
  };

  const handlePosition = () => {
    // @ts-ignore
    const { top, height } = containerRef?.current?.getBoundingClientRect();
    const screenHeight = typeof window === "undefined" ? 0 : window.innerHeight;
    const elementPos = screenHeight - top;
    const stepSize = (screenHeight + height) / 10;
    const index = elementPos / stepSize;

    setScroll(index);
  };

  const getSearchContent = () => {
    const contentIndex = Math.floor(scroll);

    const input =
      contentIndex >= INPUTS.length
        ? INPUTS[INPUTS.length - 1]
        : INPUTS[contentIndex];

    return (
      <>
        <InputField text={input} />
        {input === INPUTS[INPUTS.length - 1] ? (
          <Results>
            {SEARCH_RESULTS.map((res) => (
              <SearchResult key={res.title} {...res} />
            ))}
          </Results>
        ) : null}
      </>
    );
  };

  return <Container ref={containerRef}>{getSearchContent()}</Container>;
}

interface InputFieldProps {
  text: string;
}
function InputField({ text }: InputFieldProps) {
  return (
    <InputContainer>
      <InputLabel>Where do you want to go?</InputLabel>
      <InputText>{text}</InputText>
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
