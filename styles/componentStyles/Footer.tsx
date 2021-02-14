import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
justify-items: center;
  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const DownloadButtons = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: "row";
  flex-wrap: wrap;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    justify-content: flex-end;
  }
`;
