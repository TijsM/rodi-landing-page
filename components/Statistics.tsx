import React, { useEffect, useState, useRef } from "react";

import { getFormattedTime, getEllapsedTime } from "../helpers/Clock";

import {
  Container,
  Stat,
  StatAmount,
  StatName,
  StatUnit,
  Row,
} from "../styles/componentStyles/Statistics";

type Props = {
  startTime: Date;
};

export default function Statistics({ startTime }: Props) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerLocation, setContainerLocation] = useState(0);
  const containerRef = useRef();
  const [distance, setDistance] = useState(20);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 999);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, []);

  const handleScroll = () => {
    handlePosition();
    updateDistances();
  };

  const handlePosition = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const updateDistances = () => {
    const distances = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    // @ts-ignore
    const { top } = containerRef?.current?.getBoundingClientRect();
    const screenHeight = typeof window === "undefined" ? 0 : window.innerHeight;
    const elementPos = screenHeight - top;
    const stepSize = screenHeight / 10;
    const distanceIndex = elementPos / stepSize;
    if (distanceIndex > 0 && distanceIndex < distances.length - 1) {
      setDistance(distances[distanceIndex.toFixed(0)]);
    }
  };

  return (
    <Container ref={containerRef}>
      <Stat>
        <Row>
          <StatAmount>{distance}</StatAmount>
          <StatUnit>{"km"}</StatUnit>
        </Row>
        <StatName>{"Distance"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{28.8}</StatAmount>
          <StatUnit>{"km/h"}</StatUnit>
        </Row>
        <StatName>{"Avergage speed"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{230}</StatAmount>
          <StatUnit>{"m"}</StatUnit>
        </Row>
        <StatName>{"Elevation"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{getEllapsedTime(startTime, currentTime)}</StatAmount>
        </Row>
        <StatName>{"Duration"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{28.1}</StatAmount>
          <StatUnit>{"km/h"}</StatUnit>
        </Row>
        <StatName>{"Max. speed"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{getFormattedTime(currentTime)}</StatAmount>
        </Row>
        <StatName>{"Time"}</StatName>
      </Stat>
    </Container>
  );
}
