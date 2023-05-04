import styles from './GameTable.module.css'
import Icon from '../icon/Icon'


function GameTable({status, onClick, console}){

  return(
    <>
      <div className={styles.GameTable} onClick={onClick}>
        {
          status === 1 && <Icon iconName="O"/>
        }
        {
          status === -1 && <Icon iconName="X"/>
        }
      </div>
    </>
  )
}

export default GameTable