import React from 'react'
import styles from './product-cart.module.css'

const ProductCartIcon = ({size ,setShow}) => {
  return (
    <div className={styles['cart']} onClick={()=>setShow(false)}>
      <span>
          <i className="fas fa-cart-plus"></i>
      </span>
      <span>{size}</span>
    </div>
  )
}

export default ProductCartIcon