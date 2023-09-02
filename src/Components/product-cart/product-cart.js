import React from 'react'

const ProductCart = ({cart}) => {
  return (
    <div>
        <ul>
            {cart.map((item , index) => (
            <li key={index}> 
                {item.titlle} - {item.price}
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductCart