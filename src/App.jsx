import StartGame from "./Components/StartGame"
import Gameplay from "./Components/Gameplay"
import './App.css'
import { useState } from "react"
function App() {

  const [isGameStarted , SetisGameStarted] = useState(false)

  const toggleGameplay = () => {
    SetisGameStarted((prev)=> !prev)
  }

  return (
    <>
      { isGameStarted ?  <Gameplay/> :<StartGame toggle = {toggleGameplay} />}
    </>
  )
}

export default App
