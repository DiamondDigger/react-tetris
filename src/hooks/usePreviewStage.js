import { useEffect, useState } from "react";
import { createStage, MINI_STAGE } from "../gameHelpers";

export function usePreviewStage(player) {
  const [miniStage, setMiniStage] = useState(createStage(MINI_STAGE));

  useEffect(() => {
    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell = [0, "clear"]))
      );

      player.nextTetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.nextTetroPos.y][x + player.nextTetroPos.x] = [
              value,
              "clear",
            ];
          }
        });
      });
      return newStage;
    };

    setMiniStage((prev) => updateStage(prev));
  }, [player]);

  return [miniStage, setMiniStage];
}
