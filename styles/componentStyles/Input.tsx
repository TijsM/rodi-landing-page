import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 32px;
  border: none;
  background-color: transparent;
  color: white;
  padding-right: 16px;
`;

export const StyledInput = styled.input`
  /* width: 100%; */
  display: flex;
  flex-grow: 1;
  height: 48px;
  font-size: 32px;
  border: none;
  background-color: transparent;
  color: white;
`;
