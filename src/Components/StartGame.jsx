import styled from "styled-components"
import { Button } from "./styled/Button"

function StartGame({toggle}) {
  return (
    <>
       <Container>
        <div><img src="images/dices 1.png" alt="" /></div>
        <div className="gameStartText">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
       </Container>
    </>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100vh;
    

    .gameStartText{
      display: flex;
      flex-direction: column;
      align-items: end;
      h1{
        font-size: 96px;
        white-space: nowrap;
      }
    }
  @media screen and (max-width:840px){
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;

    img{
      width: 100%;
      min-width: 400px;
      max-width: 31rem;
    }
    .gameStartText{
      h1{
        font-size: 76px;
       
      }
    }
    
  }
  @media screen and (max-width:400px){
    .gameStartText{
      h1{
        font-size: 4rem;
       
      }
    }
  }
    
`
