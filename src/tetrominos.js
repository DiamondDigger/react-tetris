export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: '255, 255, 255'
    },
    I: {
        shape: [
            [0, 'I', 0],
            [0, 'I', 0],
            [0, 'I', 0],
        ],
        color: '3, 252, 240'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '252, 3, 248'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: '252, 3, 86'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '132, 252, 3'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]

        ],
        color: '240, 252, 3'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]

        ],
        color: '252, 186, 3'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '141, 167, 199'
    }
}

export const createTetromino = () => {
    const shapesOfTetrominos = 'IJLOTSZ'
    const randomTetromino = shapesOfTetrominos[Math.floor(Math.random() * shapesOfTetrominos.length)]
    console.log('shape of tetromino', randomTetromino)

    return TETROMINOS[randomTetromino]
}