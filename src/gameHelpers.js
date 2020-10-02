export const STAGE_HEIGHT = 20
export const STAGE_WIDTH = 10

export function createStage() {
    return Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
}

export const checkCollision = (stage, player, {x: moveX, y: moveY}) => {
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
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true
                }
            }
        }
    }
}