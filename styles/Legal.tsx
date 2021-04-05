import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  min-height: 100vh;
  line-height: 20px;
  font-size: 18px;
  padding: 72px 0px;
`;

export const Article = styled.article`
  max-width: 1000px;
  margin: auto;
`;

export const Header = styled.header`
  padding-top: 72px;
  padding-bottom: 72px;
`;

export const H1 = styled.h1`
  font-size: 72px;
`;

export const P = styled.p`
  padding: 12px 0px;
`;

export const Strong = styled.strong`
  font-weight: 700;
  text-decoration: underline;
  font-size: 24px;
  margin-top: 48px;
  display: block;
`;

export const A = styled.a`
  text-decoration: underline;
  opacity: 0.7;
  color: ${({ theme }) => theme.white};
`;

export const Li = styled.li`
  margin-left: 16px;
  padding-left: 16px;
  padding-bottom: 8px;
  list-style-type: disc;
`;
