import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  margin: 0px -8px;
`;

export const TextContainer = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  font-weight: 500;
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
  font-weight: 300;
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
