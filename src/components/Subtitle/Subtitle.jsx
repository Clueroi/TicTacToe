import styles from './subtitle.module.css'

function Subtitle({children}){
  return(
    <>
    <p className={styles.Subtitulo}>{children}</p>
    </>
  )
}
export default Subtitle