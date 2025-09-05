import React from 'react'
import Login from "./pages/Login"
import Nav from './components/Nav'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LiveCam from './pages/LiveCam'

const App = () => {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about-us' element={<About />}></Route>
      <Route path='/live-camera' element={<LiveCam />}></Route>
    </Routes>
    </>
  )
}

export default App