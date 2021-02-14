import styled from "styled-components";

export const Page = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Explenation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  justify-content: center;
  height: 100%;
  font-size: 20px;
`
export const TextBlock = styled.p`
  margin-top: 12px;
`;


export const ImageContainer = styled.div`
    position: relative;
    width: ${({width}) => width? width : "100px" };
    height: ${({height}) => height? height : "100px" };
    margin: 24px auto;
`