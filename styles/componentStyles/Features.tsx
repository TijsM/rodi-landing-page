import styled from "styled-components";
import { H2 as DefaultH2 } from "../Titles";

export const FeatureBlock = styled.article`
  margin: 64px 0px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
  }
`;
export const H2 = styled(DefaultH2)`
  margin-bottom: 96px;

  @media only screen and (min-width: 768px) {
    width: 85%;
    margin-bottom: 128px;
  }
`;

export const ImageContainer = styled.div`
  width: 75vw;
  height: 75vw;
  background-color: ${(props) => props.theme.dark};
  margin-left: ${(props) => (props.leftAlign ? "auto" : "0px")};
  margin-right: ${(props) => (props.leftAlign ? "0px" : "auto")};

  /* has to be under TextContainer */
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    width: 40vw;
    height: 40vw;
    /* margin-right: ${(props) => (props.leftAlign ? "auto" : "0px")}; */
    order: ${(props) => (props.leftAlign ? 1 : 0)};
  }
`;

export const TextContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.07);
  margin-left: ${(props) => (props.leftAlign ? "0px" : "auto")};
  margin-right: ${(props) => (props.leftAlign ? "auto" : "0px")};

  opacity: 0.95;

  width: 75vw;
  margin-top: -100px;
  padding: 14px;
  padding-bottom: 48px;

  /* has to be on top of ImageContainer */
  position: relative;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    box-shadow: none;
    width: 500px;
  }
`;

export const FeatureDescription = styled.p`
  font-weight: 200;
  line-height: 125%;
  margin-top: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
