import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/constant'
import ProductCardView from '../../Components/product-card/product-card-view'
const ProductsPage = () => {
  const [productList, setProductList] = useState([])
  useEffect(()=> {
    axios.get(BASE_URL + '/products')
    .then(Res => {
      setProductList(Res.data)
    })
  },[])

  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchChange = (e) => {
    console.log('set search Q:',e)
    setSearchQuery(e.target.value)
  }

  const filteredProducts = productList.filter((product) =>
  product.title.includes(searchQuery)
  )

  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if(prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category)
      } else {
        return [...prevSelectedCategories, category]
      }
    })
  }

  // const CheckedProducts = productList.filter((product) => {
  //   if (selectedCategories.length === 0) {
  //     return true
  //   } else {
  //     return selectedCategories.some((category) => product.categories.includes(category)
  //     )
  //   }
  // })-
  return (
    <Fragment>
      <div>
        <input 
        type='text'
        placeholder='جستجوی محصول'
        value={searchQuery}
        onChange={handleSearchChange}
        />
      </div>
            <div>
        <div>
          <label>
            <input
              type='checkbox'
              value='Mobile'
              checked={selectedCategories.includes('Mobile')}
              onChange={() => handleCategoryChange('Mobile')}
            />
            Mobile
          </label>
        </div>
        <div>
          <label>
            <input
              type='checkbox'
              value='Laptop'
              checked={selectedCategories.includes('Laptop')}
              onChange={() => handleCategoryChange('Laptop')}
            />
            Laptop
          </label>
        </div>
      </div>
    <div>
      {productList.length > 0  ? <ProductCardView products={filteredProducts}></ProductCardView> : <p>در حال بارگزاری</p>}
    </div>
    </Fragment>
  )
}

export default ProductsPage