import styled from "styled-components";

export const Description = styled.div`
  font-style: italic;
  font-size: 18;
  color: ${({ theme }) => theme.dark};
  margin-top: 24px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 3px;

  font-style: italic;
  font-size: 18;
  color: ${({ theme }) => theme.dark};
 `;

export const ListItemText = styled.span``;

export const ListIcon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.dark};
`;
