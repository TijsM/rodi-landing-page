import styled from "styled-components";

export const StyledButton = styled.button`
  padding: ${(props) => props.sizes.mobile.padding};
  border-radius: ${(props) => props.sizes.mobile.borderRadius};

  background-color: ${(props) => (props.disabled ? " #555555" : "white")};
  border: none;

  color: ${(props) => props.theme.dark};
  font-weight: 700;
  font-size: ${(props) => props.sizes.mobile.fontSize};
  text-decoration: none;

  cursor: pointer;

  @media only screen and (min-width: 768px) {
    padding: ${(props) => props.sizes.desktop.padding};
    font-size: ${(props) => props.sizes.desktop.fontSize};
    border-radius: ${(props) => props.sizes.desktop.borderRadius};
  }
`;
