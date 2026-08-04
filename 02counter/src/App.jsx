import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Card} from './components/card.jsx'
import {Username} from './components/card.jsx'  

import { Movie, Liked } from './state.jsx'


function App() {

  const [counter,setCounter]=useState(0);

  // let counter=0;

  function Addvalue(){

    // counter=counter+1;
    
    setCounter(counter+1); 
    console.log(counter);


  }

  function ispositive(){
    if(counter>0){
      return true;
    }
  }

  function remove(){
    if(ispositive()){
      setCounter(counter-1);
    }
  }


  return (
    <>

      <div className="count">

      <h1>welcome</h1>
      <h2>counter value:{counter}</h2>
      <button className="add-btn" onClick={()=>setCounter(counter+1)}>add {counter}</button>
      
      <button className="remove-btn" onClick={()=>{
          if (counter>0) {
            setCounter(counter-1);
          }
        }
      }> 
      remove {counter}
      </button>
      
      <Card name="saina"/>
      <Username username="@saina.x" second_username="@mikasa.y"/>
      <Card name="mikasa"/>


      <Movie title="avengers"/>
     




      </div>

      
     
    </>
  )
}

export default App
