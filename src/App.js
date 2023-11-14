import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter, Route, Routes,Navigate
} from 'react-router-dom';
import Welcome from './welcome';
import Officalpage from './mainpages/officalpage';
import Location from './mainpages/location';
import Temperature from './mainpages/temperature';
import Petinfo from './mainpages/petinfo';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

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
