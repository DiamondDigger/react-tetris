import styled from "styled-components";

export const StyledStage = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(70vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 70vw;
  background: #555;
`;

export const BottomStage = styled.div`
  position: relative;
  top: -280px;
  left: 60px;
`;
