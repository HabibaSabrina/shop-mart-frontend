import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ProductCartRow = ({ theProduct }) => {
    const { product_name, image, price, quantity } = theProduct
    return (
        // Row of the cart product
        <div className='flex items-center my-10  shadow-xl shadow-[#757b9f] justify-between border-2 p-2 bg-white'>
            <div className='flex gap-10 items-center p-3'>
                <div>
                    <img className='w-24 bg-gray-200 border-2 border-[#2B3467] p-3 ' src={image} alt="" />
                </div>
                <div>
                    <p className='text-xl text-[#2B3467] font-semibold'>{product_name}</p>
                    <p className='text-gray-600 font-semibold'>Price: {price} $</p>
                    <p className='text-gray-600 font-semibold'>Quantity: {quantity}</p>
                </div>
            </div>
            <button className='text-xl rounded-full mx-5 bg-[#EB455F] text-white p-3'><FaTrash></FaTrash></button>
        </div>
    );
};

export default ProductCartRow;