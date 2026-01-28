import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import ContactUs from './ContactUs'

function App() {


  return (
    <>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
     </Routes>
    <Footer />
    </>
  )
}

export default App
