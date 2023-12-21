import { useState } from 'react'
import {Route,Routes} from "react-router-dom" 
import Navbar from './Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
