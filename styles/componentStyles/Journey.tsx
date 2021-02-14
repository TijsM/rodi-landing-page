import styled from "styled-components";

export const Page = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 900px) {
    height: 75vh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    max-height: 100%;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 900px) {
    margin: 48px 0px;
    justify-content: space-around;
  }
`;

export const Select = styled.div`
  box-shadow: 0px 4px 24px 8px rgba(255, 255, 255, 0.05);
  font-weight: ${({ selected }) => selected && 700};
  text-decoration: ${({ selected }) => selected && "underline"};
  margin-top: 24px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  cursor: pointer;
  @media only screen and (min-width: 900px) {
    padding: 36px;
    font-size: 32px;
  }
`;

export const Explenation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  justify-content: center;
  height: 100%;
  font-size: 20px;

  @media only screen and (min-width: 900px) {
    padding: 0 48px;
    font-size: 24px;
  }
  @media only screen and (min-width: 1300px) {
    padding: 0 96px;
  }
`;
export const TextBlock = styled.p`
  margin-top: 12px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: ${({ width }) => width && width + "px"};
  height: ${({ height }) => height && height + "px"};
  margin: 24px auto;

  @media only screen and (min-width: 1000px) {
    width: ${({ width }) => width && width * 1.5 + "px"};
    height: ${({ height }) => height && height * 1.5 + "px"};
  }
  @media only screen and (min-width: 1300px) {
    width: ${({ width }) => width && width * 1.75 + "px"};
    height: ${({ height }) => height && height * 1.75 + "px"};
  }
`;
