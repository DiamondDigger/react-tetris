import React, {useState} from "react";
import '../index.css'

//Components
import Stage from './Stage'
import Cell from './Cell'
import Display from './Display'
import StartButton from './StartButton'

//Styled Components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

//Hooks
import {useStage} from '../hooks/useStage'
import {usePlayer} from "../hooks/usePlayer";
import {createStage, checkCollision} from "../gameHelpers";
import {createTetromino} from "../tetrominos";

function Tetris() {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player)

    const startGame = () => {
        //reset everything
        setStage(createStage())
        resetPlayer()
        setGameOver(false)
    }

    const move = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 37) { // left arrow
                movePlayer(-1)
            }
            if (keyCode === 39) { // right arrow
                movePlayer(1)
            }
            if (keyCode === 40) { // down
                dropPlayer()
            }
        }
    }

    const drop = () => {
        if (!checkCollision(stage, player, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false});
        } else {
            if (player.pos.y < 1) {
                console.log('Game Over')
                setGameOver(true)
            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }
    }

    const dropPlayer = () => {
        drop()
    }

    const movePlayer = (direction) => {
        if (!checkCollision(stage, player, {x: direction, y: 0})){
            updatePlayerPos({x: direction, y: 0})
        }
        // updatePlayerPos({x: direction, y: 0})
    }

    console.log('re-render')
    return (
        <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)}>
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
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris