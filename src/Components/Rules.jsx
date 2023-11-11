import styled from "styled-components"

export default function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
        <li>if you get wrong guess then  2 point will be dedcuted </li>
      </div>

    </RulesContainer>
  )
}

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 18px;
    border-radius: 10px;
    z-index: 999;
    position: relative;
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    .text{
        margin-top: 15px;
        p{
            font-size: 16px;
        }
    }
    /* @media screen and (max-width:840px) {
      text-align: center;
      .text{
        text-align: left;
      }
    } */
`