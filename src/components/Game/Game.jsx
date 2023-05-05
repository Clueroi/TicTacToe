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
    verifyGame()
    setCurrentPlayer (currentPlayer*-1)
  }, [GameState])
  

  return(
    <>

      <div className={styles.Pos}>
        <div className={styles.Game} >

          {
            GameState.map((value, pos)=> <GameTable
              key={`Game-option-pos${pos}`}
              status={value}
              onClick={() => HandleClick(pos) }
              isWinner={verifyWinnerLine(pos)}
            />)
          }


        </div>
        <div>
          <GameInfo 
          currentPlayer={currentPlayer}
          winner={Winner}
          onReset={HandleReset}
          />
        </div>
        
      </div>
    </>
  )
}
export default Game