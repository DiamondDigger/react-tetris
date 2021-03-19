import styled from "styled-components";

import background from "../../img/background.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${background}) #000;
  background-size: cover;
  /* overflow: hidden; */
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  padding: 40 px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

export const TetrisBox = styled.div`
  /* background-color: aqua; */
`;
