import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCartRow from './ProductCartRow';
import CartOrderSummary from './CartOrderSummary';

const ProductCart = () => {
    // loading the saved data of the cart
    const { addedProductsArr } = useLoaderData()
    let totalPrice = 0;
    let totalQuantity = 0;
    // finding total price, total quantity and grand total of the product
    addedProductsArr.forEach(thePro => {
        totalPrice = totalPrice + (thePro.price * thePro.quantity);
        totalQuantity = totalQuantity + thePro.quantity
    });
    const grandTotal = totalPrice + 5; //adding 5 dollar as shipping charge
    return (
        <div className='flex justify-center gap-28 items-start bg-gray-50 py-10'>
            {/* Cart products */}
            <div className='w-1/2'>
                {
                    addedProductsArr.map(theProduct => <ProductCartRow key={theProduct.id} theProduct={theProduct}></ProductCartRow>)
                }
            </div>
            {/* order summary */}
           <CartOrderSummary totalPrice={totalPrice} grandTotal={grandTotal} totalQuantity={totalQuantity}></CartOrderSummary>
        </div>
    );
};

export default ProductCart;