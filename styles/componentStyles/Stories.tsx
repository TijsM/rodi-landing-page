import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StoryCard = styled.div`
  width: 320px;
  padding: 48px 24px;
  box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.08);
  margin-right: 48px;
  margin-top: 48px;
`;

export const H4 = styled.h4`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.dark};
  line-height: 125%;
  width: 85%;
`;

export const Context = styled.p`
  font-weight: 100;
  line-height: 125%;
  margin-top: 14px;
  font-size: 24px;
  /* font-style: italic; */
  color: ${(props) => props.theme.dark};
  opacity: 0.75;
  margin-top: 24px;
`;
