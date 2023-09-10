import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/cart-slice';

const ProductCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div>
      <h2>سبد خرید</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleIncrement(item)}>+1</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleDecrement(item)}>-1</button>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCart;
