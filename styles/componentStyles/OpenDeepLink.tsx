import styled from "styled-components";
import { H2 as DefaultH2, H3 as DefaultH3 } from "../Titles";

export const Content = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    height: 75vh;
  }
`;

export const Title = styled(DefaultH2)``;
export const SubTitle = styled(DefaultH3)`
  font-weight: 400;
`;

export const A = styled.button`
  background-color: ${({ theme }) => theme.white};
  padding: 24px;
  border: none;
  cursor: pointer;
  margin: 48px 0px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 16px 8px rgba(0, 0, 0, 0.06);
  text-decoration: none;
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.dark};
  font-size: 24px;
  padding-left: 12px;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ImageContainer = styled.div``;

export const OpenArticle = styled.article``;

export const DonwloadArticle = styled.article``;

export const DownloadButtonContainer = styled.div`
  margin-top: 24px;
`;
