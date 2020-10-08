import {useCallback, useState} from 'react'

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)

    //points for 1, 2, 3, 4 cleared rows
    const linePoints = [40, 100, 300, 1200]

    const calc = useCallback(() => {
        if (rowsCleared > 0) {
            //the formula from the original tetris
            setScore(prev => prev + linePoints[rowsCleared-1] * (level + 1))
            setRows(prev => prev + rowsCleared)
        }
    }, [level, rowsCleared])


}