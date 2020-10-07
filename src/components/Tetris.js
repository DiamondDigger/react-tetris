import React, {useState} from "react";
import '../index.css'

//Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

//Styled Components
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

//Hooks
import {useStage} from '../hooks/useStage'
import {usePlayer} from "../hooks/usePlayer";
import {createStage, checkCollision} from "../gameHelpers";
import {useInterval} from "../hooks/useInterval";

function Tetris() {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer()
    const [stage, setStage] = useStage(player,resetPlayer)

    const startGame = () => {
        //reset everything
        setStage(createStage())
        resetPlayer()
        setGameOver(false)
        setDropTime(1000)
    }

    const movePlayer = (direction) => {
        if (!checkCollision(stage, player, {x: direction, y: 0})){
            updatePlayerPos({x: direction, y: 0})
        }
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
            if (keyCode === 38) {
                rotatePlayer(stage, 1)
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
        setDropTime(null)
        console.log('interval off')
        drop()
    }

    useInterval(() => {
        drop()
        }, dropTime
    )

    const keyUp = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000)
                console.log('interval up')
            }
        }
    }


    console.log('re-render')
    return (
        <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)} onKeyUp={keyUp}>
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