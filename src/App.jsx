import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
