import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import LiveCam from './components/LiveCam'; // Fixed import
import Report from './pages/Report';

const App = () => {
  return (
      <>
      <Nav /><Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/report' element={<Report/>} />
      <Route path='/live-camera' element={<LiveCam />} /> {/* Fixed element name */}
    </Routes>
    </>
    
  );
}

export default App;