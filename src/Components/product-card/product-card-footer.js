import React from 'react'
import styles from './product-card.module.css'
const ProductCardFooter = ({children}) => {
  return (
    <div className={styles['product-card-footer']}>{children}</div>
  )
}

export default ProductCardFooter