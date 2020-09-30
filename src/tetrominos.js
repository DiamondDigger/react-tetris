export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: 'WhiteSmoke'
    },
    I: {
        shape: [
            [0, 'I', 0],
            [0, 'I', 0],
            [0, 'I', 0],
            [0, 'I', 0]
        ],
        color: 'Cyan'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: 'Chartreuse'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: 'Crimson'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color: 'Aquamarine'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: 'BlueViolet'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 'T', 0],
        ],
        color: 'LemonChiffon'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: 'Yellow'
    }
}

export const createTetromino = () => {
    const shapesOfTetrominos = 'IJLOTSZ'
    const randomTetromino = shapesOfTetrominos[Math.floor(Math.random() * shapesOfTetrominos.length)]
    console.log('shape of tetromino', randomTetromino)

    return TETROMINOS[randomTetromino]
}