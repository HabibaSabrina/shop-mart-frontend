import React from 'react';
import { FaShoppingBag, FaTrash } from 'react-icons/fa';

const CartOrderSummary = ({totalQuantity, grandTotal, totalPrice }) => {
    return (
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
    );
};

export default CartOrderSummary;