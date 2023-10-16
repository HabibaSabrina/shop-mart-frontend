import React from 'react';
import { FaStar } from 'react-icons/fa';

const CardDetail = ({ description, price, rating }) => {
    return (
        <div className='pb-5'>
            {/* card description and ratings */}
            <p className='h-24 p-3 text-white text-center'>{description}</p>
            <div className='flex gap-1 my-2 items-center justify-center text-yellow-400'>
                {Array.from({ length: rating }, (_, index) => 
                    <FaStar key={index}></FaStar>
                )}
            </div>
            <p className='text-xl font-semibold text-white text-center'>${price}</p>
        </div>
    );
};

export default CardDetail;