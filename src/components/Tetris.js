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
import {useGameStatus} from '../hooks/useGameStatus'

let gameOn = false

function Tetris() {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer()
    const [stage, setStage, rowsCleared] = useStage(player,resetPlayer)
    const [score, setScore, level, setLevel, rows, setRows] = useGameStatus(rowsCleared)

    const formulaOfSpeed = 1000 / (level + 1) + 200

    const startGame = () => {
        //reset everything
        setStage(createStage())
        resetPlayer()
        setGameOver(false)
        setDropTime(1000)
        setRows(0)
        setLevel(0)
        setScore(0)
        gameOn = true
    }

    const pauseGame = () => {
       gameOn = !gameOver && gameOn
           ? (setDropTime(null),
           console.log('pause ON'),
           !gameOn)
           : (setDropTime(formulaOfSpeed),
           console.log('pause OFF'),
           !gameOn)
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
        // increase level when player has cleared 10 rows
        if (rows > ((level + 1) * 10 )){
            setLevel(prev => prev + 1)
            // increase time
            setDropTime(formulaOfSpeed)
        }

        if (!checkCollision(stage, player, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false});
        } else {
            if (player.pos.y < 1) {
                console.log('Game Over')
                setGameOver(true)
                setDropTime(null)
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
                setDropTime(formulaOfSpeed)
                console.log('interval up')
            }
        }
    }


    console.log('re-render', gameOn)
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
                                <Display text={`Score: ${score}`}/>
                                <Display text={`Rows: ${rows}`}/>
                                <Display text={`Level: ${level}`}/>
                            </div>
                        )
                    }
                    <StartButton callback={startGame} value='Start Game'/>
                    <StartButton callback={pauseGame} value='Pause Game'/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>

    )
}

export default Tetris