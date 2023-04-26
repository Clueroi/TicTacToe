import { useState } from 'react'

import Icon from '../icon/Icon'
import Title from '../Title/Title'
import styles from './Game.module.css'
import GameTable from '../GameTable/GameTable'


function Game(){

  const[GameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const HandleClick = (pos) =>{
    let newGameState = [...GameState]
    newGameState [pos] = currentPlayer
    setCurrentPlayer (currentPlayer*-1)
    setGameState(newGameState)
  }

  

  return(
    <>

      <div className={styles.Pos}>
        <div className={styles.Game} >

          {
            GameState.map((value, pos)=>
            <GameTable
              key={`Game-option-pos${pos}`}
              status={value}
              onClick={() => HandleClick(pos) }
            />)
          }

        </div>
        <div className={styles.player}>
          <h4>Próximo a jogar</h4>
          {
            currentPlayer === 1 && <Icon iconName="O"/>
          }
          {
            currentPlayer === -1 && <Icon iconName="X"/>
          }
        </div>
      </div>
    </>
  )
}
export default Game