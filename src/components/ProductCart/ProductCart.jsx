import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCartRow from './ProductCartRow';
import { FaShoppingBag, FaTrash } from 'react-icons/fa';

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
            <div className='bg-[#2B3467] text-white border border-[#2B3467] mt-20'>
                <div className='p-10'>
                <p className='text-3xl font-semibold mb-5'>Order Summary</p>
                <div className='text-xl'>
                    <p>Selected Item: {totalQuantity}</p>
                    <p className='my-3'>Total Price: {totalPrice} $</p>
                    <p>Shipping Charge: 5 $</p>
                    <hr className='my-3' />
                    <p>Grand Total: {grandTotal} $</p>
                </div>
                </div>
                <div>
                    {/* buttons of order summary */}
                    <button className='flex items-center gap-3 font-semibold bg-gray-100 text-[#2B3467] w-full justify-center py-3'>Delete Cart <FaTrash className='text-xl'></FaTrash></button>
                    <button className='flex items-center gap-3 font-semibold bg-[#EB455F] w-full justify-center py-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;