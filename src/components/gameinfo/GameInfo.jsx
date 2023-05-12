import Icon from "../icon/Icon"
import Subtitle from "../Subtitle/Subtitle"
import Button from "../button/Button"


import styles from './GameInfo.module.css'




function GameInfo({currentPlayer, winner, onReset, isDraw}){
  
  const EnableButton = ()=>{
    if( winner !== 0 ) return true
    if(isDraw) return true
  }

  
  return(

    <div>

      <div className={styles.player}>
      
        
        {
         !isDraw && winner === 0 && 
          <>
          <Subtitle>Próximo a jogar:</Subtitle>
          {
            currentPlayer === 1 && <Icon iconName="O"/>
          }
          {
            currentPlayer === -1 && <Icon iconName="X"/>
          }
          </>
        }
        

        {
          !isDraw && winner !== 0 && 
          <>
          <h2>O vencedor é: </h2> 
          {
            winner === 1 && <Icon iconName="O"/>
          }
          {
            winner === -1 && <Icon iconName="X"/>
          }
          </>
        }

        {
          isDraw === true &&
          <>
          <h2>Empatou</h2>
          </>
        }
        </div>
        <div className={styles.button}>
        <Button onClick={onReset}
        disabled={!EnableButton()}
        >
          Reiniciar
        </Button>
        </div>  

    </div>
  )
}

export default GameInfo