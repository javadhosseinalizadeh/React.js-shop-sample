import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement} from '../../redux/add-slice'


const ProductCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const counter = useSelector((store)=>store)
  const dispatch = useDispatch();
console.log('card', cartItems)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - تعداد: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductCart