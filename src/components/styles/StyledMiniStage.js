import styled from "styled-components";

export const StyledMiniStage = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(10vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  width: 100%;
  min-width: 10vw;
  border-radius: 20px;
  background: blue;
  margin-bottom: 20px;
  overflow: hidden;
`;
