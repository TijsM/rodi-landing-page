import styled from "styled-components";

export const Footer = styled.footer``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkGroup = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const A = styled.a`
  color: ${({ theme }) => theme.dark};
  font-size: 18px;
  margin: 8px 0px;
`;
