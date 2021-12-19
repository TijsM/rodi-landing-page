import React from "react";

import {
  InputLabel,
  InputContainer,
  InputText,
  Divider,
} from "../../styles/componentStyles/features/Input";

interface InputFieldProps {
  text: string;
}
export default function SearchInput({ text }: InputFieldProps) {
  return (
    <InputContainer>
      <InputLabel>Where do you want to go?</InputLabel>
      <InputText>{text}</InputText>
      <Divider />
    </InputContainer>
  );
}
