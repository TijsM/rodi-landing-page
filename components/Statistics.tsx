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

type FixedSizeArray<N extends number, T> = N extends 0
  ? never[]
  : {
      0: T;
      length: N;
    } & ReadonlyArray<T>;

type ScrollData = FixedSizeArray<10, any>;

export default function Statistics({ startTime }: Props) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [scroll, setScroll] = useState<number>();
  const [distance, setDistance] = useState(20);
  const [elevation, setElevation] = useState(245);
  const [average, setAverage] = useState(28.1);

  const containerRef = useRef();
  // prettier-ignore
  const distances: ScrollData = [20.1, 21.3, 22.5, 23.7, 24.9, 26.1, 27.3, 28.5, 29.7, 30.0];
  // prettier-ignore
  const elevations: ScrollData = [245, 245, 245, 255, 270, 271, 271, 271, 275, 275];
  // prettier-ignore
  const speeds: ScrollData = [28.1, 28.1, 28.3, 28.2, 28.3, 28.2, 28.5, 28.7, 28.9, 29.0];

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

  useEffect(() => {
    updateDistances();
    updateElevation();
    updateAverageSpeed();
  }, [scroll]);

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

  const updateDistances = () => {
    if (scroll > 0 && scroll < distances.length - 1) {
      setDistance(distances[scroll.toFixed(0)]);
    }
  };

  const updateElevation = () => {
    if (scroll > 0 && scroll < elevations.length - 1) {
      setElevation(elevations[scroll.toFixed(0)]);
    }
  };

  const updateAverageSpeed = () => {
    if (scroll > 0 && scroll < speeds.length - 1) {
      setAverage(speeds[scroll.toFixed(0)]);
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
          <StatAmount>{average}</StatAmount>
          <StatUnit>{"km/h"}</StatUnit>
        </Row>
        <StatName>{"Avergage speed"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{elevation}</StatAmount>
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
