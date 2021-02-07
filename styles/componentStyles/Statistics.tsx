import styled from "styled-components";

export const Container = styled.article`
  color: ${({ theme }) => theme.white};
  display: grid;

  height: 100%;
  width: 100%;

  padding: 24px;

  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding: 48px;
  }
  @media only screen and (min-width: 1500px) {
    padding: 96px;
  }
  @media only screen and (min-width: 2000px) {
    padding: 144px;
  }
`;

export const Stat = styled.div``;

export const StatAmount = styled.span`
  font-size: 28px;
  @media only screen and (min-width: 450px) {
    font-size: 42px;
  }
  @media only screen and (min-width: 560px) {
    font-size: 55px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 1300px) {
    font-size: 65px;
  }
`;

const SubText = styled.span`
  font-size: 14px;
  font-weight: 200;
  @media only screen and (min-width: 1000px) {
    font-size: 20px;
  }

`;

export const StatUnit = styled(SubText)`
  margin-left: 8px;
`;

export const StatName = styled(SubText)``;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
`;
