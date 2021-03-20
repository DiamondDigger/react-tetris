import React from "react";

import { StyledStage, BottomStage } from "./styles/StyledStage";

import Cell from "./Cell";
import ControlButtons from "./ControlButtons";

function Stage({ stage, gameOver, movePlayer, dropPlayer, rotatePlayer }) {
  if (gameOver) {
    return null;
  }
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
      <BottomStage>
        <ControlButtons
          movePlayer={movePlayer}
          dropPlayer={dropPlayer}
          rotatePlayer={rotatePlayer}
          stage={stage}
        />
      </BottomStage>
    </StyledStage>
  );
}

export default Stage;
