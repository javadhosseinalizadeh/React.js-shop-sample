import React from 'react'
import styles from './product-card.module.css'
const ProductCardWrapper = ({children}) => {
  return (
    <div className={styles['product-card-wrapper']}>{children}</div>
  )
}

export default ProductCardWrapper