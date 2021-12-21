import './App.css';
import Header from './component/Header';
import React, { useEffect, useState } from 'react';
import Person from './component/Person';
import axios from 'axios';
function App() {
  const [persons, setpersons] = useState([])
  useEffect(async () => {
    try {
      let result= await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setpersons(res.data))
    } catch (error) {
      
    }

  }, [])
  return (
    <div>
     <Header/>
    <div className="list">
    {persons.length?persons.map((el)=>(<Person user={el}/>)):(<img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt=""/>)}
    </div>
    </div>
  );
}

export default App;
