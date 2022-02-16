import styled from "styled-components";

export const PageLayout = styled.div`
  margin-top: ${({ isSection }) => isSection && "76px"};
  height: 100%;
  padding: ${({ ignoreVHeight }) => (ignoreVHeight ? "0px 24px" : "24px")};

  max-width: 2000px;
  /* margin: auto; */

  @media only screen and (min-width: 768px) {
    padding: ${({ ignoreVHeight }) => (ignoreVHeight ? "0px 96px" : "96px")};
  }
  @media only screen and (min-width: 1600px) {
    padding: ${({ ignoreVHeight }) => (ignoreVHeight ? "0px 148px" : "148px")};
  }
`;

export const ScreenWidth = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;
