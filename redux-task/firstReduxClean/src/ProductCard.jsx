import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from './redux/slice'

function ProductCard() {

    const dispatch = useDispatch()

  return (
    <>
    <div className="product-card">
  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-UKdo7kfXA4bboc8ROq2DzEsd6s_gBEgEiPWYWoZ-O1yjvsFmS1HJsV0YMA48mJePdn4d72DKmpXo2RBkN6kcQXbleaJZDLWrRZ3YEnj5Q54K2_gxYYi00Q"  alt="Product Image" />

  <div className="product-info">
    <h3 className="product-title">head phone</h3>
    <p className="product-price">$49.99</p>

    <button onClick={()=>dispatch(addItem(1))}  className="add-to-cart">
      Add to Cart
    </button>
    <br /> <br />
    <button onClick={()=>dispatch(removeItem(1))}  className="delete-to-cart">
      Delete from Cart
    </button>
  </div>
</div>
    </>
  )
}

export default ProductCard;