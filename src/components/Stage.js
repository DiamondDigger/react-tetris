import React from "react";

import { StyledStage, BottomStage } from "./styles/StyledStage";

import Cell from "./Cell";
import ControlButtons from "./ControlButtons";

function Stage({ stage, gameOver }) {
  if (gameOver) {
    return null;
  }
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
      {/* <BottomStage>
        <ControlButtons />
      </BottomStage> */}
    </StyledStage>
  );
}

export default Stage;
