import styled from "styled-components";

export const Li = styled.p`
  color: ${({ theme }) => theme.dark};
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    padding-bottom: 18px;
  }
`;

export const Container = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 16px;
  padding-bottom: 8px;
`;

export const ListItemIndicator = styled.div`
  background-color: ${({ theme }) => theme.dark};
  min-width: 10px;
  height: 10px;

  border-radius: 10px;
  margin-right: 16px;
  margin-top: 8px;
`;
