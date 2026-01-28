import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from './redux/slice'
import { fetchProducts } from './redux/ProductSlice'
import { useSelector } from 'react-redux'


function ProductCard() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const productSelecter = useSelector((state) => state.products.items)


  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="grid">
        {
          productSelecter.length && productSelecter.map((item) => (
            <div key={item.id} className='card' >
              <img src={item.thumbnail} />
              <div>
                <div className='title'>{item.title}  </div>
                <div className='brand'>{item.brand}  </div>
                <div className='price'>${item.price}  </div>
                <div className='rating'>{item.rating}  </div>
                {
                  cartSelector.find(cartItem => cartItem.id === item.id) ?
                    <button onClick={() => dispatch(removeItem(item))} className='add-to-cart remove-btn'>Remove from cart</button>
                    :
                    <button onClick={() => dispatch(addItem(item))} className='add-to-cart'>Add to cart</button>
                }



              </div>
            </div>
          ))
        }

      </div>

    </>
  )
}

export default ProductCard;