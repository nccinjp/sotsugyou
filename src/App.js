import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, Route, Routes,Navigate
} from 'react-router-dom';
import Welcome from './welcome';
import Officalpage from './officalpage';
import Location from './location';
import Temperature from './temperature';
import Petinfo from './petinfo';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes >
            <Route path='/' element={ <Navigate to="/welcome" /> } />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/officalpage' element={<Officalpage />} />
            <Route path='/location' element={<Location />} />
            <Route path='/temperature' element={<Temperature />} />
            <Route path='/petinfo' element={<Petinfo />} />
          
          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;
