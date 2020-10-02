export const STAGE_HEIGHT = 20
export const STAGE_WIDTH = 10

export function createStage() {
    return Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
}

export const checkCollision = (stage, player, {x: moveX, y: moveY}) => {
    //1. check cell of tetromino
    //2. check that we are not go outside of the stage in vertical dimension  (y)
    //3. check that we are not go outside of the stage in horizontal dimension (x)
    //4. check the value of the next cell( in which we move to) - 'clear' or not
}