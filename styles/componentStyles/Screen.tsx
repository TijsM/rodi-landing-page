import styled from "styled-components";
import Image from "next/image";

const SectionHeight = "200px";

export const Container = styled.section`
  width: 100%;
  height: ${SectionHeight};
  position: relative;
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
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: 25px;
  position: relative;
  margin-top: auto;
`;

export const Logo = styled(Image)`
  z-index: 2;
`;

export const BackgroundImage = styled(Image)`
  z-index: 1;
`;
