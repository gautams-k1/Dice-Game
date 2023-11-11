import styled from "styled-components"

export default function NumberSelector({selectedNumber , setSelectedNumber, error , setError}) {
  
  const arryNumber = [1 , 2 , 3 , 4 , 5 , 6]
  
  const numberSelecterHendler = (value) =>{
    setSelectedNumber(value)
    setError('')
  }

    return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
       <div className="flex">
       {arryNumber.map((value, i)=>(
          <Box 
          isselected={value === selectedNumber}
          key={i}
          onClick={()=>numberSelecterHendler(value)}
          >{value}
          </Box>  
          ))}
       </div>
      <p>Select Number</p>
      
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
  
  display: flex;
  align-items: end;
  flex-direction: column;

  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
    margin-top: 12px;
  }
  .error{
    color: red;
    font-weight: 400;
    margin-bottom: 10px;
  }
  @media screen and (max-width:840px) {
    p{
      font-size: 18px;
    }
    .flex{
      gap: 13px;
    }
  }

  
   
  
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isselected ? 'black' : '#fff')};
    color: ${(props) => (!props.isselected ? 'black' : '#fff')};

    @media screen and (max-width:840px) {
      width: calc(70vw / 6);
      height: 54px;
    }
`