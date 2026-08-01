import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // const [counter,setCounter]=useState(0);

  let counter=0;

  function Addvalue(){

    counter=counter+1;
    console.log(counter);


  }


  return (
    <>

      <div className="count">

      <h1>welcome</h1>
      <h2>counter value:{counter}</h2>
      <button className="add-btn" onClick={Addvalue}>add</button>
      <button className="remove-btn" onClick={Addvalue}>remove</button>
      </div>
      
     
    </>
  )
}

export default App
