import styled from "styled-components";

export const Container = styled.article`
  color: ${({ theme }) => theme.white};
  display: grid;

  height: 100%;
  width: 100%;

  padding: 24px;

  @media only screen and (min-width: 768px) {
    padding: 48px;
  }
  @media only screen and (min-width: 1500px) {
    padding: 96px;
  }
  @media only screen and (min-width: 2000px) {
    padding: 144px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputLabel = styled.p`
  color: ${({ theme }) => theme.white};
  opacity: 0.4;
  font-size: 18px;
`;

export const InputText = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  margin-top: 4px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.white};
  margin-top: 8px;
`;
