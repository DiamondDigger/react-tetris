import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
  display: grid;
  height: 200px;
  width: 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid yellow;
  /* background-color: white; */
  position: absolute;
  /* top: 10px;
  left: 40px; */
`;

export const Up = styled.button`
  opacity: 0.3;
  grid-column: 2;
  grid-row: 1;
  font-size: 0.7rem;
`;

export const Down = styled.button`
  opacity: 0.3;
  grid-column: 2;
  grid-row: 3;
  font-size: 0.7rem;
`;

export const Left = styled.button`
  opacity: 0.3;
  grid-column: 1;
  grid-row: 2;
  font-size: 0.7rem;
`;

export const Right = styled.button`
  grid-column: 3;
  grid-row: 2;
  opacity: 0.3;
  font-size: 0.7rem;
`;
