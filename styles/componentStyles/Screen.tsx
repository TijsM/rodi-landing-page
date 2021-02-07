import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
  width: 100%;
  height: 200px;
  position: relative;

  @media only screen and (min-width: 768px) {
    height: 400px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const InfoTitle = styled.h3`
  z-index: 3;
  color: white;
  width: 60%;
  margin-left: auto;
  font-size: 18px;
  font-weight: 700;
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 48px;
    width: 50%;
  }
`;

export const LogoContainer = styled.div`
  width: 75px;
  height: 25px;
  position: absolute;
  margin-top: auto;
  left: 24px;
  bottom: 24px;

  @media only screen and (min-width: 768px) {
    width: 142px;
    height: 36px;
    left: 96px;
    bottom: 48px;
  }
`;

export const Logo = styled(Image)`
  z-index: 2;
`;

export const BackgroundImage = styled(Image)`
  z-index: 1;
`;
