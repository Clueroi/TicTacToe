import styles from './Game.module.css'
import GameTable from '../GameTable/GameTable'

function Game(){
  return(
    <>
    <div className={styles.Game}>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    <GameTable/>
    </div>
    </>
  )
}
export default Game