import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/o-nama" element={<About />} />
      <Route path="/jelovnik" element={<Menu />} />
      <Route path="/galerija" element={<Gallery />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
