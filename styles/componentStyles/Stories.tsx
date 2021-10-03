import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-left: -24px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #13172d10;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #13172d33;
  }
`;

export const StoryCard = styled.a`
  width: 320px;
  min-width: 320px;
  padding: 48px 24px;
  box-shadow: 0px 4px 24px 8px rgba(0, 0, 0, 0.08);
  margin: 48px 24px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const H4 = styled.h4`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.dark};
  line-height: 125%;
  width: 85%;
  text-align: left;
`;

export const Context = styled.p`
  font-weight: 100;
  line-height: 125%;
  margin-top: 14px;
  font-size: 24px;
  color: ${(props) => props.theme.dark};
  opacity: 0.75;
  margin-top: 24px;
  text-align: left;
`;
