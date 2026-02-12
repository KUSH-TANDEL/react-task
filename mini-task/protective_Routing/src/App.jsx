import { useState } from 'react'
import Home from "./Components/Home"
import About from "./Components/About"
import Login from "./Components/Login"
import ProctectedRoute from "./Components/ProctectedRoute"
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProctectedRoute><Home /></ProctectedRoute>} ></Route>
          <Route path='/about' element={<ProctectedRoute><About /></ProctectedRoute>} ></Route>
          <Route path='/login' element={<Login />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
