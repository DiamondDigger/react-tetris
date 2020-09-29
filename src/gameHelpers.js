export const STAGE_HEIGHT = 20
export const STAGE_WIDTH = 10

export function createStage() {
    return Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
}