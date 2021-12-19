import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const InputLabel = styled.p`
  color: ${({ theme }) => theme.white};
  opacity: 0.4;
  font-size: 14px;
  @media only screen and (min-width: 1500px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 18px;
  }
`;

export const InputText = styled.p`
  color: ${({ theme }) => theme.white};
  margin-top: 8px;
  font-size: 18px;
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 28px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.white};
  margin-top: 8px;
`;
