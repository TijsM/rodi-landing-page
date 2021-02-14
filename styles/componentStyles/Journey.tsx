import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.div`
  box-shadow: 0px 4px 24px 8px rgba(255, 255, 255, 0.05);
  font-weight: ${({ selected }) => selected && 700};
  text-decoration: ${({ selected }) => selected && "underline"};
  margin-top: 24px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  cursor: pointer;
`;
