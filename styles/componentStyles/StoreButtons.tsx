import styled from "styled-components";

export const Svg = styled.svg`
  cursor: pointer;
`;

export const DownloadButtons = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;
