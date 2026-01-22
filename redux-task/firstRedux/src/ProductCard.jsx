import React from 'react'
import { useDispatch } from 'react-redux'
import AddToCart from './AddToCart'

function ProductCard() {

    const dispatch = useDispatch()

  return (
    <>
    <div className="product-card">
  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-UKdo7kfXA4bboc8ROq2DzEsd6s_gBEgEiPWYWoZ-O1yjvsFmS1HJsV0YMA48mJePdn4d72DKmpXo2RBkN6kcQXbleaJZDLWrRZ3YEnj5Q54K2_gxYYi00Q"  alt="Product Image" />

  <div className="product-info">
    <h3 className="product-title">head phone</h3>
    <p className="product-price">$49.99</p>

    <button onClick={()=>dispatch(AddToCart())}  className="add-to-cart">
      Add to Cart
    </button>
  </div>
</div>
    </>
  )
}

export default ProductCard