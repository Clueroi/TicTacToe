import Icon from "../icon/Icon"
import Subtitle from "../Subtitle/Subtitle"
import styles from './GameInfo.module.css'
import Button from "../button/Button"


function GameInfo({currentPlayer, winner, onReset}){
  
  const EnableButton = ()=>{
    if( winner !== 0 ) return true
  }

  
  return(

    <div>

      <div className={styles.player}>
      
        
        {
          winner === 0 && 
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
          winner !== 0 &&
          <>
          <Subtitle> O vencedor é: </Subtitle>
          {
            winner === 1 && <Icon iconName="O"/>
          }
          {
            winner === -1 && <Icon iconName="X"/>
          }
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