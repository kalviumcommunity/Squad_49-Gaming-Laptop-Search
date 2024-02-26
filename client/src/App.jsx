import React from 'react'
import './App.css'
import LaptopsList from './components/laptopsList'

function App() {
  return (
    <div>
      <header>
        <img src="https://cdn-icons-png.flaticon.com/128/689/689355.png" id="laptopIcon" />
        <h1>Gaming Laptop Search Station</h1>
      </header>       
      <LaptopsList />
    </div>
  )
}

export default App
