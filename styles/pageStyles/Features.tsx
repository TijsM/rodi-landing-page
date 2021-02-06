import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 75vw;
  height: 75vw;
  background-color: ${(props) => props.theme.primary};
  position: relative;
  /* has to be under TextContainer */
  z-index: 1;
`;

export const TextContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.07);
  opacity: 0.95;

  width: 75vw;
  margin-left: auto;
  margin-top: -100px;
  padding: 14px;

  /* has to be on top of ImageContainer */
  position: relative;
  z-index: 2;
`;

export const FeatureDescription = styled.p`
  font-style: italic;
  font-weight: 200;
  margin-top: 14px;
`;
