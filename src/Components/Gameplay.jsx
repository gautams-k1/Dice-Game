import TottleScore from "./TottleScore"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import styled from "styled-components"
import { useState } from "react"
import { Button, OutlineButton } from "./styled/Button"
import Rules from "./Rules"

export default function Gameplay() {
  
  const [score ,setScore] = useState(0)
  const [selectedNumber , setSelectedNumber] = useState()
  const [currentDice , setcurrentDice] = useState(1)
  const [error , setError] = useState()
  const [showRules , setShowRules] = useState(false)


  const ganerateRandomNumber=(min , max)=>{
    return Math.floor(Math.random() * (max - min) + min)
  }


  const resetScore = () =>{
    setScore(0)
  }

  const roleDice = () => {
    if(!selectedNumber){
      
      setError("You have not selected any number")

    return}

    const randomNumber = ganerateRandomNumber(1, 7)

    setcurrentDice(randomNumber)


    if(selectedNumber === randomNumber){
      setScore((prev)=> prev + randomNumber)
    }
    else{
      setScore((prev)=> prev - 2)
    }

    setSelectedNumber(undefined)

  }


  return (
    <MainContainer>
      <div className="Top_section">
        <div>
          <TottleScore score={score}/>
        </div>  
        <div className="NumberSelector">
          <NumberSelector 
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}/>
        </div>  
        
      </div>
      <div className="RoleDice">
      <RoleDice
      currentDice={currentDice}
      roleDice={roleDice}
      />
      </div>
      <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button
      onClick={()=>setShowRules((prev)=>(!prev))}>
        { showRules? 'Hide Rules' : 'Show Rules'}
      </Button>
      </div>
      { showRules && < Rules/>}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  .Top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 2px solid red; */
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    /* padding: 1rem; */
    margin: 0;
  }
  @media screen and (max-width:840px){
    .Top_section {
      flex-direction: column;
      justify-content: center;
      /* border: 1px solid red; */
    }
    .btns{
      /* border: 1px solid red; */
      position: absolute;
      width: 100%;
      top: 0;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

    }
    .NumberSelector{
    position: absolute;
    top: 70%;
  }
  @media screen and (max-width:840px) {
    .RoleDice {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 
  }
  
  }
`
