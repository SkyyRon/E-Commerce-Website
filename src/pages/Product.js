import React from 'react'
import ProductList from './../features/product/components/ProductList';
import Navbar from './../features/navbar/Navbar';
function Product() {
  return (
    <div>
        <Navbar></Navbar>
        <p className='text-center mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black'>ALL PRODUCTS</p>
        <ProductList>

        </ProductList>
    </div>
  )
}

export default Product