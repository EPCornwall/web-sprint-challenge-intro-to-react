import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Ships from './Ships'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [shipData, setShipData] = useState([])

  useEffect(()=>{
    axios.get("https://swapi.py4e.com/api/starships")
    .then(res =>{
      console.log(res)
      setShipData(res.data.results)
    })
    .catch((error) =>{
      console.log(error)
    })
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Starships</h1>
      {shipData.map((ship)=>{
        return(
        <Ships 
        key = {ship.name}
        name={ship.name}
        model={ship.model}
        cost={ship.cost_in_credits}
        length={ship.length}
        hyperDrive={ship.hyperdrive_rating}
        />
        );
      })}
    </div>
  );
}

export default App;
