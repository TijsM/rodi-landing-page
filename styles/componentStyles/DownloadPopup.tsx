import styled from "styled-components";
import { H2 as DefaultH2 } from "../Titles";

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(19, 23, 45, 0.5);
  overflow: hidden;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: ${({ theme }) => theme.white};
  position: relative;
`;

export const H2 = styled(DefaultH2)`
  font-size: 36px;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 72px;
  }
`;

export const Explenation = styled.div`
  margin-top: 24px;
  font-style: italic;
  font-size: 18px;
  font-weight: 200;
  line-height: 125%;
  color: ${({ theme }) => theme.dark};
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 32px;
    max-width: 700px;
  }
`;

export const ExplenationSection = styled.p`
  margin-top: 12px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.dark};
  font-size: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    height: 48px;
  }
`;

export const Submit = styled.button`
  padding: 10px 32px;
  font-size: 18px;

  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  border: none;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 24px;
    padding: 0 32px;
  }
`;

export const Close = styled.button`
  font-style: italic;
  font-size: 14px;
  color: ${({ theme }) => theme.dark};
  opacity: 0.75;
  font-weight: 200;
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 24px;
  left: 24px;
  text-decoration: underline;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    bottom: 96px;
    left: 96px;
  }
  @media only screen and (min-width: 1600px) {
    bottom: 148px;
    left: 148px;
  }
`;
