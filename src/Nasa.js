import React from "react";

//i want to created a something here that grabs the data from the Nasa API 

const Nasa = props => {
    return (
        <div>
            <h1>NASA Picture of the Day!</h1>
      <img src={props.nasaPic.url} alt="picture of the day" />
        <p> {props.nasaPic.date} </p>
        <p> {props.nasaPic.explanation} </p>
        <p> {props.nasaPic.copyright} </p>
        </div>
        
    )

} 

export default Nasa