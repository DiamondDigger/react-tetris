import {useEffect, useState} from 'react'

import {createStage} from "../gameHelpers";

export function useStage(player, resetPlayer) {
    const [stage, setStage] = useState(createStage());
    //1. add another state for the sweet row

    useEffect(() => {
        const updateStage = prevStage => {
            // First flush the stage
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)))

            //2. check if the row is full
            //3. flush it with .reduce of the newStage
            //4. call the function when you check player collided option

            // Then draw the tetromino
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

            // Check the player
            if (player.collided) {
                resetPlayer()
            }

            return newStage;
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage]
}