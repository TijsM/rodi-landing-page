import styled from "styled-components";

export const FeatureBlock = styled.article`
  margin: 48px 0px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 75vw;
  height: 75vw;
  background-color: ${(props) => props.theme.dark};
  margin-left: ${(props) => (props.leftAlign ? "auto" : "0px")};
  margin-right: ${(props) => (props.leftAlign ? "0px" : "auto")};

  position: relative;
  /* has to be under TextContainer */
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
  font-style: italic;
  font-weight: 200;
  margin-top: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
