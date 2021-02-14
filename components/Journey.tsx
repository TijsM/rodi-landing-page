import React, { useState } from "react";

import {
  Container,
  Select,
  SelectGroup,
} from "../styles/componentStyles/Journey";

import { PageLayout } from "../styles/Layouts";

export default function Journey() {
  const [step, setStep] = useState<"plan" | "enjoy" | "share">("plan");

  return (
    <Container>
      <PageLayout>
        <SelectGroup>
          <Select onClick={() => setStep("plan")} selected={step === "plan"}>
            Plan and discover routes
          </Select>
          <Select onClick={() => setStep("enjoy")} selected={step === "enjoy"}>
            Enjoy it
          </Select>
          <Select onClick={() => setStep("share")} selected={step === "share"}>
            Share the adventure
          </Select>
        </SelectGroup>
      </PageLayout>
    </Container>
  );
}
