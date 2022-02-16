import React, { useState, useEffect } from "react";
import axios from "axios";
import Nasa from './Nasa'
import "./App.css";




function App() {
  const [nasaPic, setNasaPic] = useState();
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
      setNasaPic(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.error(err)
    })

  }, [])

  return (
    
    <div className="App">

      {nasaPic && <Nasa nasaPic ={nasaPic} />}
    </div>
  ); 
  // return (
  //   <div className="App">
  //     <p>
  //       Read through the instructions in the README.md file to build your NASA
  //       app! Have fun <span role="img" aria-label='go!'>🚀</span>!
  //     </p>
  //   </div>
  // );

}

export default App;
