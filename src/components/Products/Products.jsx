import React, { useContext, useEffect, useState } from 'react';

import ProductPageCard from './ProductPageCard';

import SideBar from './SideBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../BackgroundStyle/style.css'
import { ProductContext } from '../../Provider/ProductProvider';
import HeadlineDesign from '../DesignComponents/HeadlineDesign';

const Products = () => {
    const [products] = useContext(ProductContext)
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(products)
    return (
        <div className='md:flex bg-gray-300'>
            {/* Product section headings */}
           <SideBar></SideBar>
            <div className='pt-14 md:overflow-y-auto md:h-screen'>
                <HeadlineDesign headline={'Our Products'} description={'Shopmart offers a wide range of high-quality products, from electronics to fashion, catering to diverse customer needs.'}></HeadlineDesign>
            <div className='grid  md:grid-cols-3 mx-10 my-10 gap-12'>
               {
                products.map(product => <ProductPageCard key={product.id} product={product}></ProductPageCard>)
               }
            </div>
            </div>
        </div>
    );
};

export default Products;