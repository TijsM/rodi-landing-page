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

export const Button = styled.button`
  background-color: ${({ theme }) => theme.dark};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  margin: 48px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 32px;
  padding-right: 12px;
`;

export const ImageContainer = styled.div`
  transform: rotate(90deg);
`;

export const OpenArticle = styled.article``;

export const DonwloadArticle = styled.article``;

export const DownloadButtonContainer = styled.div`
  margin-top: 24px;
`;
