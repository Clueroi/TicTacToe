import { useState, useEffect } from 'react'

import GameInfo from '../gameinfo/GameInfo'
import styles from './Game.module.css'
import GameTable from '../GameTable/GameTable'


const WinnerTable =[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]


function Game(){
  

  const[GameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [Winner, setWinner] = useState(0)
  const [winnerLine, setWinnerLine] = useState([])
  const [draw, setDraw] = useState(false)


  const HandleClick = (pos) =>{
    if (GameState[pos] === 0 && Winner === 0){
    let newGameState = [...GameState]
    newGameState [pos] = currentPlayer
    setGameState(newGameState)
    }
  }

  const HandleReset = ()=>{
    setGameState (Array(9).fill(0))
    setWinner (0)
    setWinnerLine([])
    setDraw(false)
  }

  const verifyDraw = ()=>{
    if(GameState.find((value)=> value === 0)===undefined && Winner === 0){
      setDraw(true)
    }
  }


  const verifyWinnerLine = (pos) => winnerLine.find((value)=> value === pos)


  const verifyGame = () => {  
    WinnerTable.forEach((line)=>{
      const values = line.map((pos) =>GameState[pos])
      const sum = values.reduce((sum, value)=>sum + value, 0)
      if(sum === 3 || sum === -3){
        setWinner (sum/3)
        setWinnerLine(line)
      }
    })
  }

  useEffect(()=>{
    verifyDraw()
    verifyGame()
    setCurrentPlayer (currentPlayer*-1)
  }, [GameState])
  

  useEffect(()=>{
    if (Winner !== 0){
      setDraw(false)
    }
  }, [Winner])

  return(
    <>

      <div className={styles.Pos}>
        <div className={styles.Game} >

          {
            GameState.map((value, pos)=> {
              return <GameTable
              key={`Game-option-pos${pos}`}
              status={value}
              onClick={() => HandleClick(pos) }
              isWinner={verifyWinnerLine(pos)}
              isDraw={draw}
            />}
              
            )
          }


        </div>
        <div>
          <GameInfo 
          currentPlayer={currentPlayer}
          winner={Winner}
          onReset={HandleReset}
          isDraw ={draw}
          />
        </div>
        
      </div>
    </>
  )
}
export default Game