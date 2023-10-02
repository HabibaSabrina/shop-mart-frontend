import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import TopProductCard from '../TopProduct/TopProductCard';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch("/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div className='mt-20'>
            {/* Product section headings */}
            <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center text-3xl font-semibold w-96 p-2 mx-auto '>Products</h1>
            <p className='text-center mx-auto mt-5 mb-20 text-gray-600 w-1/2'>Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.</p>
            {/* product card loop */}
            <div className='grid grid-cols-4 mx-20 my-10 gap-10'>
                {/* {
                    products.map(slide => <TopProductCard key={slide.id} product={slide}></TopProductCard>)
                } */}
            </div>
        </div>
    );
};

export default Products;