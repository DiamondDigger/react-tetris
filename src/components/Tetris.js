import React from "react";

import Stage from './Stage'
import Cell from './Cell'
import Display from './Display'
import StartButton from './StartButton'

import {createStage} from '../gameHelpers'

function Tetris() {

    return (
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text='Score'/>
                    <Display text='Rows'/>
                    <Display text='Level'/>
                </div>
            </aside>
            <StartButton/>
        </div>

    )
}

export default Tetris