import Header from "../Header/Header"
import Game from '../Game/Game'

function GamePage(){
  return(
    <>
      <div className="container">
       <Header></Header>
       <Game/>
      </div>
    </>
  )
}

export default GamePage