import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Card from './components/card'

function App() {
  const [data, setData]= useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res)
      setData(res.data.results)
    })
    .catch(err => {
      console.log("sorry m8 no data, heres your error", err)
    })
  }, [])
  return (
    <div className="App">
      {data.map(x => (
       <Card data={x}/>
      ))}
    </div>
  );
};

export default App;
