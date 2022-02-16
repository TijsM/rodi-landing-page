import React from "react";

import { StyledInput, Container, Label } from "../styles/componentStyles/Input";

interface InputProps {
  value: string;
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  value,
  placeholder,
  type,
  onChange,
  onKeyPress,
  label,
}: InputProps) {
  return (
    <Container>
      <Label>{label}:</Label>
      <StyledInput
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Container>
  );
}
