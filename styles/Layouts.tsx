import styled from "styled-components";

export const PageLayout = styled.div`
  padding: 24px;

  @media only screen and (min-width: 768px) {
    padding: 96px;
  }
  @media only screen and (min-width: 1600px) {
    padding: 148px;
  }
`;


export const ScreenWidth = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
