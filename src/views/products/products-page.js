import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/constant'
import ProductCardView from '../../Components/product-card/product-card-view'
import styles from './products-page.module.css'
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
    setSearchQuery(e.target.value)
  }

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

  const filteredProducts = productList.filter((product) => {
    const titleMaches = product.title.includes(searchQuery)
    const categoryMatches = 
    selectedCategories.length === 0 ||
    (product.category && selectedCategories.includes(product.category))

    return titleMaches && categoryMatches
  })

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
     <div className={styles['category-checkboxes']}>
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
        <div >
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