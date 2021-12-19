import styled from "styled-components";

export const Container = styled.article`
  color: ${({ theme }) => theme.white};
  display: grid;

  height: 100%;
  width: 100%;

  padding: 24px;
  padding-bottom: 16px;
  }
  @media only screen and (min-width: 1500px) {
    padding: 96px;
    padding-bottom: 24px;

  }
  @media only screen and (min-width: 2000px) {
    padding: 144px;
    padding-bottom: 33px;

  }
`;

export const Results = styled.div`
  overflow: hidden;
`;
