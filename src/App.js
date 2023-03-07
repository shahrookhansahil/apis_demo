import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(0);
  useEffect(()=>{
    async function getData(){
      const data = await fetch("http://hub.dummyapis.com/employee?noofRecords=100&idstarts=1001");
    }
  },[state])
  return (
    <div className="App">
     <button onClick={()=>setState(state+1)}>CLick me</button>
     <h1>{state}</h1>
    </div>
  );
}

export default App;
