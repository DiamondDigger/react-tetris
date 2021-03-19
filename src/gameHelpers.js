export const STAGE = {
  height: 20,
  width: 12,
};

export const MINI_STAGE = {
  height: 6,
  width: 5,
};

export function createStage({ height, width }) {
  return Array.from(Array(height), () => new Array(width).fill([0, "clear"]));
}

export const checkCollision = (stage, player, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[0].length; x++) {
      //1. check cell of tetromino with a shape
      if (player.tetromino[y][x] !== 0) {
        if (
          //2. check that we are not go outside of the stage in vertical dimension  (y)
          !stage[y + player.pos.y + moveY] ||
          //3. check that we are not go outside of the stage in horizontal dimension (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //4. check the value of the next cell( in which we move to) - 'clear' or not
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          console.log("player collided!", player.pos.y, player.pos.x);
          return true;
        }
      }
    }
  }
};
