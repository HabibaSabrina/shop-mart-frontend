import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import TopProductCard from '../TopProduct/TopProductCard';
import ProductPageCard from './ProductPageCard';
import { FaArrowRight } from 'react-icons/fa';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch("/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div className=' bg-gray-100 flex'>
            {/* Product section headings */}
            <div className='w-96 pt-20 bg-[#2B3467] '>
                <h1 className='text-white font-semibold py-2 hover:bg-black hover:bg-opacity-20 cursor-pointer border-b px-2'>Electronics Items </h1>
                <h1 className='text-white font-semibold py-2 hover:bg-black hover:bg-opacity-20 cursor-pointer border-b px-2'>Fashion Wear</h1>
                <h1 className='text-white font-semibold py-2 hover:bg-black hover:bg-opacity-20 cursor-pointer border-b px-2'>Toyes and games</h1>
            </div>
            {/* <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center text-3xl font-semibold w-96 p-2 mx-auto '>Products</h1> */}
            {/* <p className='text-center mx-auto mt-5 mb-20 text-gray-600 w-1/2'>Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.</p> */}
            {/* product card loop */}
            <div className='pt-24'>
            <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center text-3xl font-semibold w-96 p-2 mx-auto '>Products</h1>
            <p className='text-center mx-auto mt-5 mb-5 text-gray-600 w-1/2'>Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.</p>
            <div className='grid  grid-cols-5 mx-5 my-10 gap-10'>
               {
                products.map(product => <ProductPageCard key={product.id} product={product}></ProductPageCard>)
               }
            </div>
            </div>
        </div>
    );
};

export default Products;