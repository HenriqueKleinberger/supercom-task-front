import styled from "styled-components";

export const Article = styled.article`
  border: black solid 1px;
  border-radius: 4px;
  width: 25%;
  padding: 0.5rem;
  margin: 1rem;
  height: 6rem;
  justify-content: space-between;
  position: relative;
`;

export const Edit = styled.button`
  background-color: inherit;
  border-radius: 5px;
  border: 0.5px solid black;
  cursor: pointer;
  height: 20px;
  top: 2px;
  right: 2px;
  position: absolute;
`;

export const Delete = styled.button`
  background-color: inherit;
  border-radius: 5px;
  border: 0.5px solid black;
  cursor: pointer;
  height: 20px;
  top: 2px;
  right: 40px;
  position: absolute;
`;
