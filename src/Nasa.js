import React from "react";

import styled from 'styled-components'

const StyledNasa = styled.div `
width: 50% 


`

const Headline = styled.h2`
  color: black;
  border-bottom:5px solid red;
`
const Headline1 = styled.h1`
    
  align-items: center; 
  border-bottom:2px solid gray;
  width: 100%; 
  color: blue;
  font-size: 50px; 
`;




//i want to created a something here that grabs the data from the Nasa API 

const Nasa = props => {
    return (
        <StyledNasa className = "nasa-wrapper">
            
            <Headline1>NASA Picture of the Day!</Headline1>
            <Headline> {props.nasaPic.title} </Headline>
        <img src= {props.nasaPic.url} alt='pic' />
        
        <p> {props.nasaPic.date} </p>
        <p> {props.nasaPic.explanation} </p>
        <p> {props.nasaPic.copyright} </p>
        </StyledNasa>
        
    )

} 

export default Nasa