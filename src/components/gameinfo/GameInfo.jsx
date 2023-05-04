import Icon from "../icon/Icon"
import Subtitle from "../Subtitle/Subtitle"
import styles from './GameInfo.module.css'
import Button from "../button/Button"


function GameInfo({currentPlayer, winner, onReset}){
  return(

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
        <div>
        <Button onClick={onReset} >
          Reiniciar
        </Button>
        </div>
        

    </div>
  )
}

export default GameInfo