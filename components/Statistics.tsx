import React, { useEffect, useState } from "react";

import {getFormattedTime} from '../helpers/Clock'

import {
  Container,
  Stat,
  StatAmount,
  StatName,
  StatUnit,
  Row,
} from "../styles/componentStyles/Statistics";

export default function Statistics() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    });
  }, []);

  return (
    <Container>
      <Stat>
        <Row>
          <StatAmount>{45.5}</StatAmount>
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
          <StatAmount>{"2:42:18"}</StatAmount>
        </Row>
        <StatName>{"Duration"}</StatName>
      </Stat>
      <Stat>
        <Row>
          <StatAmount>{58.1}</StatAmount>
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
