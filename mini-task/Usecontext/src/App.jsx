import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentsA from './components/componentsA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentsA />
    </>
  )
}

export default App
