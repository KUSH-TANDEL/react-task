import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'

function App() {


  return (
    <>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>hello world</h1>} />
     </Routes>
    <Footer />
    </>
  )
}

export default App
