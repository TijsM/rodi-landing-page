import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 75vh;
  background-image: url("../images/blog-header.png");
  background-size: cover;
  background-position: right 0;
`;
export const Content = styled.div`
  width: 100%;

  @media only screen and (min-width: 1000px) {
    width: 65%;
  }
`;
