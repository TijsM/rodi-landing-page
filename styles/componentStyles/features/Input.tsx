import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const InputLabel = styled.p`
  color: ${({ theme }) => theme.white};
  opacity: 0.4;
  font-size: 18px;
`;

export const InputText = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  margin-top: 8px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.white};
  margin-top: 8px;
`;
