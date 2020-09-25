import React, {useState} from "react";
import '../index.css'

import Stage from './Stage'
import Cell from './Cell'
import Display from './Display'
import StartButton from './StartButton'

import {useStage} from '../hooks/useStage'
import {usePlayer} from "../hooks/usePlayer";
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

function Tetris() {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(true)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log('re-render')
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver
                        ? (
                            <Display gameOver={gameOver} text='Game Over dude'/>
                        )
                        : (
                            <div>
                                <Display text='Score'/>
                                <Display text='Rows'/>
                                <Display text='Level'/>
                            </div>
                        )
                    }
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris