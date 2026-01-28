import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, removeAllItem } from './redux/slice'
import { useNavigate } from 'react-router'

function CartList() {

    const cartSelector = useSelector((state) => state.cart.items)
    const [cartItems,setCartItems]=useState(cartSelector) 
    const dispatch = useDispatch()
    useEffect(() => {
    setCartItems(cartSelector)
    }, [cartSelector])
    const navigator = useNavigate()
    

    const manageQuantity = (id , quantity) => {
        let qty = parseInt(quantity)>1?parseInt(quantity):1;
        const cartTempItems = cartSelector.map((item)=>{
            return item.id==id?{...item,qty}:item;
        })
        
        setCartItems(cartTempItems)
    }
    
    const handlePlaceOrder = ()=>{
        localStorage.clear();
        dispatch(removeAllItem())
        alert("order placed")
        navigator("/")

    }



    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <h2>Your Cart Items</h2>
                <span>Total Items: {cartItems.length}</span>
            </div>
            {
                cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <div className='item-info'>
                            <img src={item.thumbnail} />
                            <div className='item-details'>
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        <div className='item-actions'>
                            <div className='quantity-control'>
                                <input onChange={(e) => manageQuantity(item.id,e.target.value)} value={item.qty?item.qty:1} 
                                className='quantity-input' placeholder='Enter quantity' type="number" />
                                <div>
                                    <span className='price'>
                                        ${(item.qty?item.price*item.qty:item.price).toFixed(2)}
                                        </span>
                                    <button onClick={()=>dispatch(removeItem(item))} className='add-to-cart remove-btn'>Remove item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                    : null
            }
            <div className='cart-footer' >
                Total : ${(cartItems.reduce((sum, item) =>item.qty?sum + item.price*item.qty:sum + item.price, 0)).toFixed(2)}
            </div>
            <button onClick={handlePlaceOrder} className='add-to-cart'>Order palce</button>

        </div>
    )
}

export default CartList