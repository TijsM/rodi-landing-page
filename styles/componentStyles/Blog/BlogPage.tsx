import styled from "styled-components";
import Image from "next/image";

import { H2 as DefaultH2, H3 as DefaultH3 } from "../../Titles";

export const H2 = styled(DefaultH2)`
  margin-top: 48px;
  padding-bottom: 24px;

  @media only screen and (min-width: 768px) {
    margin-top: 64px;
    padding-bottom: 32px;
  }
`;
export const H3 = styled(DefaultH3)`
  font-size: 24px;
  padding-bottom: 16px;
  margin-top: 32px;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    font-size: 32px;
  }
`;
export const H4 = styled(DefaultH3)`
  font-size: 20px;
  padding-bottom: 12px;
  margin-top: 16px;

  @media only screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  margin: auto;
`;

export const ImageContainer = styled.div`
  height: 500px;
  margin: 48px auto;
  position: relative;
  display: flex;
  justify-content: center;
`;
