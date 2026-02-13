import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data />
      <Login />
    </>
  )
}

export default App
