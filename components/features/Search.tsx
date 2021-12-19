import React, { useEffect, useMemo, useRef, useState } from "react";
import Loader from "react-spinners/SyncLoader";

import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import { SpinnerContainer } from "../../styles/componentStyles/features/SearchResult";
import {
  Container,
  Results,
} from "../../styles/componentStyles/features/Search";

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

  const searchContent = useMemo(() => {
    const contentIndex = Math.floor(scroll);

    const input =
      contentIndex >= INPUTS.length
        ? INPUTS[INPUTS.length - 1]
        : INPUTS[contentIndex];

    const isLoaded = input === INPUTS[INPUTS.length - 1];

    return (
      <>
        <SearchInput text={input} />
        {isLoaded ? (
          <Results>
            {SEARCH_RESULTS.map((res) => (
              <SearchResult key={res.title} {...res} />
            ))}
          </Results>
        ) : (
          <SpinnerContainer>
            <Loader color={"white"} size={12} />
          </SpinnerContainer>
        )}
      </>
    );
  }, [scroll]);

  return <Container ref={containerRef}>{searchContent}</Container>;
}
