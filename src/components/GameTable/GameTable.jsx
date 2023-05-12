import classNames from 'classnames'

import styles from './GameTable.module.css'
import Icon from '../icon/Icon'


function GameTable({status, onClick, isWinner, isDraw}){

  return(
    <>
      <div className={
        classNames(styles.GameTable, {
          [styles.winner]: isWinner,
          [styles.draw]: isDraw
        })
      }
      
      onClick={onClick}>
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