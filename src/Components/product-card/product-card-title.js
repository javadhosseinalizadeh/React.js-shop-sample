import React from 'react'
import styles from './product-card.module.css'
const ProductCardTitle = ({children}) => {
  return (
    <div className={styles['product-card-title']}>{children}</div>
  )
}

export default ProductCardTitle