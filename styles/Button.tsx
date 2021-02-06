import styled from "styled-components";

export const StyledButton = styled.button`
  padding:${props => props.sizes.mobile.padding};
  border-radius: ${props => props.sizes.mobile.borderRadius};

  background-color: white;
  border: none;

  color: ${props => props.theme.primary};
  font-weight: 700;
  font-size: ${props => props.sizes.mobile.fontSize};

  cursor: pointer;

  @media only screen and (min-width: 768px) {
    padding: ${props => props.sizes.desktop.padding};
    font-size: ${props => props.sizes.desktop.fontSize};
    border-radius:${props => props.sizes.desktop.borderRadius};
  }
`;
