import React from "react";

import styled from 'styled-components'

const StyledNasa = styled.div `

display: flex; 
flex-direction: column; 
justify-content: space-between; 


`

const Date = styled.p `
    color: red; 

`

const Wrapper = styled.div `
margin: 0 130px; 

`

const Image = styled.img `
max-width: 100%; 


`

const Headline = styled.h2`
  color: black;
  border-bottom:2px solid red;
`
const Headline1 = styled.h1`
    
  align-items: center; 
  border-bottom:2px solid gray;
  width: 100%; 
  color: blue;
  font-size: 60px; 
`;




//i want to created a something here that grabs the data from the Nasa API 

const Nasa = props => {
    return (
        <Wrapper>
        <StyledNasa className = "nasa-wrapper">
            
            <Headline1>NASA Picture of the Day!</Headline1>
            <Headline> {props.nasaPic.title} </Headline>
            
        <Image src= {props.nasaPic.url} alt='pic' />
        
        <Date> {props.nasaPic.date} </Date>
        <p> {props.nasaPic.explanation} </p>
        <p> {props.nasaPic.copyright} </p>
        </StyledNasa>
        </Wrapper>
    )

} 

export default Nasa