import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Real from './Real'
import Ser from './Serv'
import Abt from './About'
import Home from './Home'
function App() {
 

  return (
    <>
   
  <BrowserRouter>
<Routes>

<Route   index element={< Real/>} /><Route path='/home' element={< Home/>} />
    <Route path="/Ser" element={<Ser/>} />
    <Route path="/Abt" element={<Abt/>} />
</Routes></BrowserRouter>
   
  

    </>
  )
}
import Serv from './Serv'

export default App