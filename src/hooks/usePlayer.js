import { useCallback, useState } from "react";

import { createTetromino, TETROMINOS } from "../tetrominos";
import { checkCollision, STAGE } from "../gameHelpers";

export function usePlayer() {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    nextTetroPos: { x: 2, y: 1 },
    tetromino: TETROMINOS[0].shape,
    nextTetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const { width } = STAGE;

  const rotate = (matrix, dir) => {
    // change rows and columns among each other
    const rotatedTetro = matrix.map((_, indexOfRow) =>
      matrix.map((col) => col[indexOfRow])
    );

    if (dir > 0) {
      return rotatedTetro.map((row) => row.reverse());
    }
    return rotatedTetro.reverse();
  };

  const rotatePlayer = (stage, dir) => {
    // make a deep copy of tetromino (reliable for array of primitives)
    const deepCopyOfPlayer = JSON.parse(JSON.stringify(player));

    // make rotation
    deepCopyOfPlayer.tetromino = rotate(deepCopyOfPlayer.tetromino, dir);

    // check if we collided and move to another position to avoid collision
    // or abort and return back
    const posX = deepCopyOfPlayer.pos.x;
    let offset = 1;
    //while we have a collision we move to the one side or another(on the offset distance)
    while (checkCollision(stage, deepCopyOfPlayer, { x: 0, y: 0 })) {
      deepCopyOfPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      //if offset is to big it's senseless and we rotate back (-dir) and abort
      if (offset > deepCopyOfPlayer.tetromino[0].length) {
        rotate(deepCopyOfPlayer, -dir);
        deepCopyOfPlayer.pos.x = posX;
        return;
      }
    }

    setPlayer(deepCopyOfPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const checkShapeOfTetrominoAndCenter = (shapeOfNextTetromino) => {
    console.log("SHAPE_OF_NEXT_TETROMINO", shapeOfNextTetromino);
    switch (shapeOfNextTetromino) {
      case "S":
      case "Z":
      case "T": {
        return {
          x: 1,
          y: 2,
        };
      }
      case "O": {
        return {
          x: 1,
          y: 2,
        };
      }
      default: {
        return { x: 1, y: 1 };
      }
    }
  };

  const resetPlayer = useCallback(() => {
    const {
      currentTetromino,
      nextTetromino,
      letterShapeOfTetromino,
    } = createTetromino();
    setPlayer({
      pos: { x: width / 2 - 2, y: 0 }, //position in the middle at the top
      nextTetroPos: checkShapeOfTetrominoAndCenter(letterShapeOfTetromino), //position in the middle at preview stage
      tetromino: currentTetromino.shape,
      nextTetromino: nextTetromino.shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, rotatePlayer];
}
