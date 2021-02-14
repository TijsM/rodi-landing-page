import styled from "styled-components";

export const IntroOverlayContainer = styled.div`
  height: 100vh;
  position: absolute;
  width: 99vw;
`;

export const OverlayColumn = styled.div`
  position: absolute;
  height: 100%;
  width: 33.33vw;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.dark};

  &:nth-of-type(2) {
    left: 33.33%;
    /* background-color: red; */
  }
  &:nth-of-type(3) {
    left: 66.66%;
    /* background-color: pink; */
  }
`;
