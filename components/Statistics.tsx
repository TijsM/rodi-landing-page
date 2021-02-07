import React from "react";

import {
  Container,
  Stat,
  StatAmount,
  StatName,
  StatUnit,
  Row,
} from "../styles/componentStyles/Statistics";

export default function Statistics() {
  const statistics = [
    {
      amount: 45.5,
      unit: "km",
      name: "Distance",
    },
    {
      amount: 28.8,
      unit: "km/h",
      name: "Average speed",
    },
    {
      amount: 230,
      unit: "m",
      name: "Elevation",
    },
    {
      amount: "2:42:18",
      unit: "",
      name: "Duration",
    },
    {
      amount: 58.1,
      unit: "km/h",
      name: "Max. speed",
    },
    {
      amount: "22:54:53",
      unit: "",
      name: "Time",
    },
  ];

  return (
    <Container>
      {statistics.map((stat) => {
        return (
          <Stat>
            <Row>
              <StatAmount>{stat.amount}</StatAmount>
              <StatUnit>{stat.unit}</StatUnit>
            </Row>
            <StatName>{stat.name}</StatName>
          </Stat>
        );
      })}
    </Container>
  );
}
