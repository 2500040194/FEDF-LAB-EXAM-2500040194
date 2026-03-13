//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter } from "react-router-dom";
import MainNavBar  from "./exam/MainNavbar";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
     <MainNavBar/>
     </BrowserRouter>
     
    </div>
  )
}

export default App
