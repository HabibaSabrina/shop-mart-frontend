import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCartRow from './ProductCartRow';

const ProductCart = () => {
    const { addedProductsArr } = useLoaderData()
    console.log(addedProductsArr)
    return (
        <div>
            {
                addedProductsArr.map(theProduct => <ProductCartRow key={theProduct.id} theProduct={theProduct}></ProductCartRow>)
            }
        </div>
    );
};

export default ProductCart;