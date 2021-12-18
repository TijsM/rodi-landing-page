import React from "react";
import {
  Container,
  InputLabel,
  InputContainer,
  InputText,
  Divider,
} from "../../styles/componentStyles/features/Search";

export function Search() {
  return (
    <Container>
      <InputContainer>
        <InputLabel>Where do you want to go?</InputLabel>
        <InputText>Ghent</InputText>
        <Divider />
      </InputContainer>
    </Container>
  );
}
