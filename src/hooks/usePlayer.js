import {useCallback, useState} from 'react'

import {createTetromino, TETROMINOS} from '../tetrominos'
import {checkCollision, STAGE_WIDTH} from "../gameHelpers";

export function usePlayer() {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: TETROMINOS[0].shape,
        collided: false
    })

    console.log('player have been created', player.tetromino)

    const rotate = (matrix, dir) => {
        //1. change rows and columns among each other
        const rotatedTetro = matrix.map((_, indexOfRow) => matrix.map(col => col[indexOfRow]))

        if (dir > 0) {
            return rotatedTetro.map(row => row.reverse())
        }
        return rotatedTetro.reverse()
    }

    const rotatePlayer = (stage, dir) => {
        //1. make a deep copy of tetromino (reliable for array of primitives)
        const deepCopyOfTetro = JSON.parse(JSON.stringify(player))

        deepCopyOfTetro.tetromino = rotate(deepCopyOfTetro.tetromino, dir)

        setPlayer(deepCopyOfTetro)


        // const stepPlusOneCell = 1
        // const tetrominoX = player.pos.x
        // checkCollision(stage, player, {x: stepPlusOneCell, y:0})
        // checkCollision(stage, player, {x: -stepPlusOneCell, y:0})
        // checkCollision(stage, player, {x: 0, y:1})
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


    return [player, updatePlayerPos, resetPlayer, rotatePlayer]
}