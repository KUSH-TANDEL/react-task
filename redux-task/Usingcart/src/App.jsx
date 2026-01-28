import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { removeAllItem } from './redux/slice'
import Header from './Header'
import ProductCard from './ProductCard'
import { BrowserRouter, Route, Routes } from 'react-router'
import CartList from './CartList'


function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()




  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductCard />} />
          <Route path='/cart' element={<CartList />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
