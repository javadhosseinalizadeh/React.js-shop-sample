import React from 'react'
import styles from './product-cart.module.css'

const ProductCartIcon = ({size}) => {
  return (
    <div className={styles['cart']} >
      <span>
          <i className="fas fa-cart-plus"></i>
      </span>
      <span>{size}</span>
    </div>
  )
}

export default ProductCartIcon