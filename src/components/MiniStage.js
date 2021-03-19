import React from "react";

import { StyledMiniStage } from "./styles/StyledMiniStage";

import Cell from "./Cell";

function MiniStage({ miniStage }) {
  return (
    <StyledMiniStage width={miniStage[0].length} height={miniStage.length}>
      {miniStage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledMiniStage>
  );
}

export default MiniStage;
