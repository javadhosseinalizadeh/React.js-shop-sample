import React from 'react'
import styles from './product-card.module.css'
const ProductCardText = ({children}) => {
  return (
    <div className={styles['product-card-text']}>{children}</div>
  )
}

export default ProductCardText