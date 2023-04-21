import Title from '../../components/Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import styles from './header.module.css'
import Icon from '../icon/Icon'

function Header(){
  return(
    <>
    <div className={styles.Header}>
       <Title> Jogo da Velha</Title>
        <Subtitle>Criado por Eric</Subtitle>
    </div>
    <div className={styles.IconContent}>
      <Icon iconName="github" link="https://github.com/Clueroi"></Icon>
    </div>
    </>
  )
}

export default Header