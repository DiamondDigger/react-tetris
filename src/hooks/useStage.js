import {useEffect, useState} from 'react'

import {createStage} from "../gameHelpers";

export function useStage(player, setPlayer) {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            // First flush the stage
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)))

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            })
            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player.pos.x, player.pos.y, player.tetromino, player.collided])

    return [stage, setStage]
}