import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext([])
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    // fetching product data set
    useEffect(() =>{
        fetch('/datasets/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <ProductContext.Provider value={[products]}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;