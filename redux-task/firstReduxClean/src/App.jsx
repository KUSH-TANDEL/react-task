import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { removeAllItem } from './redux/slice'
import Header from './Header'
import ProductCard from './ProductCard'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  return (
    <>
    
    <Header />
    <br /> <br /> 
    <button onClick={()=>dispatch(removeAllItem())}  className="delete-to-cart">
      Remove all from Cart
    </button>
     <br /> <br />
    <ProductCard />
    </>
  )
}

export default App
