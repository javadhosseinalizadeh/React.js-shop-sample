import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainLayout from '../../layout/main-layout/main-layout'
import HomePage from '../home/home-page'
import ProductsPage from "../products/products-page";
import AboutPage from '../about/about-page';
import Contact from '../contact/contact';
import ProductCart from '../../Components/product-cart/product-cart';
import NotFoundPage from '../not-found/not-found-page';
const Container = () => {
  return (
    <MainLayout>
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/products'} element={<ProductsPage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/cart'} element={<ProductCart />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </MainLayout>
  )
}

export default Container