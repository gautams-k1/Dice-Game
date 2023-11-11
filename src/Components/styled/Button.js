import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  color: #fff;
  border: none;
  background: #000;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in ;
  &:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: 0.3s background ease-in ;
  }
  @media screen and (max-width:840px){
    min-width: 111px;
    margin: 1rem;
  }
`
export const OutlineButton = styled(Button)`
   border: 1px solid black;
   background: #fff;
   color: #000;
   &:hover{
    background-color: black;
    color: #fff;
    border: 1px solid transparent;
  }
`
