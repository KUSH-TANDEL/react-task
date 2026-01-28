
import { useSelector } from 'react-redux'

function AddToCart() {
  const cartSelector = useSelector((state) => state.cart.items);


  return (
    <>
      <div className="cart1">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
      </div>
    </>
  )
}

export default AddToCart;