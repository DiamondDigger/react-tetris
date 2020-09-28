import {useEffect, useState} from 'react'

import {createStage} from "../gameHelpers";

export function useStage(player, setPlayer) {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = (prev) => {

        }

        setStage((prevState => updateStage(prevState)))
    })
    return [stage, setStage]
}