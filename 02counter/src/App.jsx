import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let counter=5;
 

  return (
    <>

      <div className="count">

      <h1>welcome</h1>
      <h2>counter value:{counter}</h2>
      <button className="add-btn">add</button>
      <button className="remove-btn">remove</button>
      </div>
      
     
    </>
  )
}

export default App
