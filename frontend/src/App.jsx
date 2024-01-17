import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import {UserContextProvider } from './context/userContext'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true
function App() {

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
