import styles from './title.module.css'

function Title({children, text}){
  return(
    <h1 className={styles.Title}>{children}{text}</h1>
  )
}

export default Title