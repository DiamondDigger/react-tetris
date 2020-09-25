import React from "react";
import '../index.css'

import Stage from './Stage'
import Cell from './Cell'
import Display from './Display'
import StartButton from './StartButton'

import {useStage} from '../hooks/useStage'
import {usePlayer} from "../hooks/usePlayer";
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

function Tetris() {
    const [stage, setStage] = useStage()
    const [player] = usePlayer()

    console.log('re-render')
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    <div>
                        <Display text='Score'/>
                        <Display text='Rows'/>
                        <Display text='Level'/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris