import React from "react";

//i want to created a something here that grabs the data from the Nasa API 

const Nasa = props => {
    return (
        <div className = "nasa-wrapper">
            <h1>NASA Picture of the Day!</h1>
            <h2> {props.nasaPic.title} </h2>
        <iframe width='800' height='400' src= {props.nasaPic.url} type = {props.nasaPic.media_type} />
        
        <p> {props.nasaPic.date} </p>
        <p> {props.nasaPic.explanation} </p>
        <p> {props.nasaPic.copyright} </p>
        </div>
        
    )

} 

export default Nasa