import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

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
            <h1 className='text-[#2B3467] text-3xl font-semibold text-center'>Our Products</h1>
            <div className='grid grid-cols-4 mx-20 my-10 gap-10'>
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;