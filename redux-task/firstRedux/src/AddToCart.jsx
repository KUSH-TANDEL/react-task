
import { useSelector } from 'react-redux'

function AddToCart() {
    const selector = useSelector((state)=>state.cart.value);
    console.log(selector);
    
  return (
    <>
  <div className="cart1">
  <span className="cart-icon">🛒</span>
  <span className="cart-count">{selector}</span>
  </div>
    </>
  )
}

export default AddToCart