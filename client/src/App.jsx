import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaptopsList from './components/laptopsList';
import AddLaptop from './components/addLaptop';
import UpdateLaptop from './components/updateLaptop';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <img src="https://cdn-icons-png.flaticon.com/128/689/689355.png" alt="Laptop Icon" id="laptopIcon" />
          <h1>Gaming Laptop Search Station</h1>
        </header>
        <Routes>
          <Route path='/' element={<LaptopsList />} />
          <Route path='/addLaptop' element={<AddLaptop />} />
          <Route path='/update/:id' element={<UpdateLaptop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
