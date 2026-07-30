import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Practice,{Saina, Create} from './saina.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { reactelement } from './saina.jsx'

//React, use this <div id="root"> as the place where you'll manage my React application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Practice/>
    <Create/>
    {reactelement}
   
  </StrictMode>,
)




