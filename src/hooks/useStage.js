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
            console.log('tetromino of player', player.tetromino)
            console.log('prevStage[1][1]', prevStage[1][1])
            console.log('prevStage[1][1][0]', prevStage[1][1][0])
            console.log('prevStage[1][1][1]', prevStage[1][1][1])

            // Draw the tetromino

            //LOGGING
            //going through the tetromino
            let i = 0
            let j = 0
            for (const row of player.tetromino) {
                ++i
                for (const value of row) {
                    j > 2 ? j = 1 : ++j
                    console.log(`__val__${i}${j}`, value)
                }
            }

            //player.pos
            console.log('player.pos.x: ', player.pos.x)
            console.log('player.pos.y: ', player.pos.y)


            player.tetromino.forEach((row, y) => {
                console.log('y:', y)
                row.forEach((value, x) => {
                    console.log('value of x: ', `${value} of ${x}`)
                    if (value !== 0) {
                        console.log(newStage())
                        newStage[y + player.pos.y][x + player.pos.x] = [value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })
            })
            console.log('new stage', newStage)
            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player.pos.x, player.pos.y, player.tetromino, player.collided])

    return [stage, setStage]
}