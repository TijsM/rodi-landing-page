import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Title>This is a fancy dancy styled title</Title>
    </div>
  );
}
