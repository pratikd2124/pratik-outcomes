import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Outcomes from './Components/Outcomes';
import Plan from './Components/Plan';
import Start from './Components/Start';
import Home from './Components/Home';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/outcome" element={<Outcomes/>} />
          <Route path="/plan" element={<Plan/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
