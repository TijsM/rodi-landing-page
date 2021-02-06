import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 24px;

  background-color: white;
  border: none;

  color: ${props => props.theme.primary};
  font-weight: 700;
  font-size: 18px;

  cursor: pointer;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    padding: 18px 36px;
    border-radius: 36px;
  }
`;
