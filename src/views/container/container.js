import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainLayout from '../../layout/main-layout/main-layout'
import HomePage from '../home/home-page'
import ProductsPage from "../products/products-page";
import AboutPage from '../about/about-page';
import Contact from '../contact/contact';
const Container = () => {
  return (
    <MainLayout>
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/products'} element={<ProductsPage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/contact'} element={<Contact />} />
        </Routes>
    </MainLayout>
  )
}

export default Container