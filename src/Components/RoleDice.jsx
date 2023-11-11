import styled from "styled-components"
import { useState } from "react"

export default function RoleDice({currentDice, roleDice}) {
  
  

  

    return (
    <DiceContainer>
      <div className="diceRole" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on the Dice to roll</p>

    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .diceRole{

    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    @media screen and (max-width:840px) {
      p{
        font-size: 18px;
      } 
    }
`