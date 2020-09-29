import {useEffect, useState} from 'react'

import {createStage} from "../gameHelpers";

export function useStage(player, setPlayer) {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            // First flush the stage
            const newStage = prevStage => prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)))
            console.log('prev stage', prevStage)
            console.log('player', player.tetromino)

            // Draw the tetromino
            for (const row of player) {
                for (const value of row) {
                    console.log('val', value)
                }
            }
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                            newStage[y + player.pos.y][x + player.pos.x] = [
                                value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            })
            console.log('new stage', newStage)
            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player.x, player.y, player.tetromino, player.collided])

    return [stage, setStage]
}