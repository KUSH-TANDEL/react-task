
import { useSelector } from 'react-redux'

function AddToCart() {
    const {value} = useSelector((state)=>state.cart);
    console.log(value);
    
  return (
    <>
  <div className="cart1">
  <span className="cart-icon">🛒</span>
  <span className="cart-count">{value}</span>
  </div>
    </>
  )
}

export default AddToCart;