import Title from "../Title/Title"
import Icon from "../icon/Icon"
import styles from './score.module.css'


function Score (){
  
  return(
    <>
      <Title>Placar:</Title>

      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="X"></Icon>
          <h1>0</h1>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="O"></Icon>
          <h1>0</h1>
        </div>
     </div>   
    </>
  )
}

export default Score