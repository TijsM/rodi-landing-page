import styled from "styled-components";

export const ResultContainer = styled.div`
  /* will be set to 1 by gsap in js  */
  opacity: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  @media only screen and (min-width: 1500px) {
    padding: 16px 0px;
  }
  @media only screen and (min-width: 2000px) {
    padding: 32px 0px;
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 16px;
  @media only screen and (min-width: 1500px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 32px;
  }
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  font-weight: 300;
  font-size: 16px;
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 32px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ width }) => width && width + "px"};
  height: ${({ height }) => height && height + "px"};

  @media only screen and (min-width: 1000px) {
    width: ${({ width }) => width && width * 1.5 + "px"};
    height: ${({ height }) => height && height * 1.5 + "px"};
  }
  @media only screen and (min-width: 1300px) {
    width: ${({ width }) => width && width * 1.75 + "px"};
    height: ${({ height }) => height && height * 1.75 + "px"};
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
