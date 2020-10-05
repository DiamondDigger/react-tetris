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