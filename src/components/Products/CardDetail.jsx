import React from 'react';
import { FaShoppingBag, FaStar } from 'react-icons/fa';

const CardDetail = ({description, price}) => {
    return (
        <div className='pb-5'>
        <p className='h-24 p-3 text-white text-center'>{description}</p>
        <div className='flex gap-1 my-2 items-center justify-center text-yellow-400'>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>

        </div>
        <p className='text-xl font-semibold text-white text-center'>${price}</p>
        <div>

            {/* <button className='flex items-center gap-3 font-semibold bg-[#EB455F] px-5 justify-center py-2 mx-auto mt-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button> */}
        </div>
    </div>
    );
};

export default CardDetail;