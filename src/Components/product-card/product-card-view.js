import React from 'react'
import ProductCardWrapper from './product-card-wrapper'
import ProductCard from './product-card'
import ProductCardTitle from './product-card-title'
import ProductCardText from './product-card-text'
import ProductCardFooter from './product-card-footer'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
const ProductCardView = ({products}) => {

  const dispatch = useDispatch(); 
   const handleAddToCart = (product) => {
      dispatch(addToCart(product))
   }
  return (
    <div>
        <ProductCardWrapper>
            {products.map(product => 
                <ProductCard key={product.id}>
                    <ProductCardTitle>{product.title}</ProductCardTitle>
                     <ProductCardText>توضیحات: {product.description}</ProductCardText>
                     <ProductCardText>قیمت: {product.price}{" "}</ProductCardText>
                     <ProductCardFooter>
                        <button  onClick={()=>handleAddToCart(product)}>
                            <span>اضافه به سبد خرید</span>
                        </button>
                     </ProductCardFooter>
                </ProductCard>)}
        </ProductCardWrapper>
    </div>
  )
}

export default ProductCardView