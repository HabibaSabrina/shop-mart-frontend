import React, { useContext, useEffect, useState } from 'react';

import ProductPageCard from './ProductPageCard';

import SideBar from './SideBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Home/Banner/style.css'
import { ProductContext } from '../../Provider/ProductProvider';

const Products = () => {
    const [products] = useContext(ProductContext)
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(products)
    return (
        <div className='flex bg-gray-300'>
            {/* Product section headings */}
           <SideBar></SideBar>
            <div className='pt-14 overflow-y-auto h-screen'>
            {/* <h1 className='border-y-2 border-white border-dashed text-white text-center text-3xl font-semibold w-96 p-2 mx-auto '>Products</h1> */}
            {/* <p className='text-center mx-auto mt-5 mb-5 text-gray-600 w-1/2'>Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.</p> */}
            <div className='grid  grid-cols-3 mx-10 my-10 gap-12'>
               {
                products.map(product => <ProductPageCard key={product.id} product={product}></ProductPageCard>)
               }
            </div>
            </div>
        </div>
    );
};

export default Products;