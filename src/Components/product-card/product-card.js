import React from 'react'
import styles from './product-card.module.css'
const ProductCard = ({children}) => {
  return (
    <div className={styles['product-card']}>{children}</div>
  )
}

export default ProductCard