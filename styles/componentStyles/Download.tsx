import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const Content = styled.article`
  @media only screen and (min-width: 768px) {
    width: 130%;
  }
`;

export const Description = styled.div`
  font-style: italic;
  font-size: 18;
  color: ${({ theme }) => theme.dark};
  margin-top: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
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
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const ListItemText = styled.span``;

export const ListIcon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.dark};
`;

export const DownloadButtons = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: "row";
  flex-wrap: wrap;
  gap: 12px;
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
  }
`;

export const MockupContainer = styled.div`
  position: relative;
  margin-top: 32px;
  width: 100%;
  height: 400px;
  @media only screen and (min-width: 768px) {
    height: 90vh;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Mockup = styled(Image)`
  margin-left: auto;
  right: 0;
`;
