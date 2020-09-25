import {useState} from 'react'

import {createTetromino} from '../tetrominos'

export function usePlayer() {
    const [player, setPlayer] = useState({
        pos:{x: 0, y: 0},
        tetromino: createTetromino.shape,
        collided: false
    })
    return [player]
}