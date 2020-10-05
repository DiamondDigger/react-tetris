import {useCallback, useState} from 'react'

import {createTetromino, TETROMINOS} from '../tetrominos'
import {STAGE_WIDTH} from "../gameHelpers";

export function usePlayer() {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false
    })

    console.log('player have been created', player.tetromino)

    const rotate = (matrix, dir) => {
        //1. change rows and columns among each other
        //2. reverse elems in the row and make it in a circle spin

        return 'stumb'
    }

    const rotatePlayer = (stage, dir) => {
        //1. check if we can rotate (about borders of the stage)
    }


    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided
        }))
        console.log('updated the player')
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 - 2, y: 0}, //position in the middle at the top
            tetromino: createTetromino().shape,
            collided: false
        })
        console.log('the player has been reset')
    }, [])


    return [player, updatePlayerPos, resetPlayer]
}