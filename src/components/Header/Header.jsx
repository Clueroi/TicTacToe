import Title from '../../components/Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import styles from './header.module.css'


function Header(){
  return(
    <div className={styles.Header}>
       <Title> Jogo da Velha</Title>
        <Subtitle>Criado por Eric</Subtitle>
    </div>
  )
}

export default Header