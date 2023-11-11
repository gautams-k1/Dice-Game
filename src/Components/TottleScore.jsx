import styled from "styled-components"

function TottleScore({score}) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TottleScore

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    
    h1{
        font-size: 100px;
        
    }
    p{
        font: 24px;
    }
    @media screen and (max-width:840px) {
      max-width: 100%;
      width: 100%;
      text-align: start;
      h1{
        font-size: 80px;
        padding: 0 20px;
        margin: 0 0 -25px;
      }
      margin-top: 50px;
    }
`
