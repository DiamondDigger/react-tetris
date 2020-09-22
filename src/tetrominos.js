export const tetrominos = {
    0: {
        shape: [[0]],
        color: 'black'
    },
    I: {
        shape: [
            [0, 'I', 0],
            [0, 'I', 0],
            [0, 'I', 0],
            [0, 'I', 0]
        ],
        color: 'green'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: 'blue'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: 'pink'
    },
    Z: {
        shape: [
            ['z', 'z', 0],
            [0, 'z', 'z'],
            [0, 0, 0],
        ],
        color: 'yellow'
    },
    S: {
        shape: [
            [0, 's', 's'],
            ['s', 's', 0],
            [0, 0, 0],
        ],
        color: 'brown'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 'T', 0],
        ],
        color: 'red'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: 'dark grey'
    }
}

export function createTetramino() {
    const shapesOfTetrominos = 'IJLOTSZ'
    const randomTetromino = () =>
        Math.floor(Math.random() * shapesOfTetrominos.length)

    return shapesOfTetrominos[randomTetromino]
}