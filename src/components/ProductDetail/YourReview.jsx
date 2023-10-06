import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { FaPen, FaStar, FaUser } from 'react-icons/fa';
import TabTitle from './TabTitle';
// import CheckoutInputField from '../Payment/CheckoutForm/CheckoutInputField'
const YourReview = () => {
    const [rating, setRating] = useState(0)
    return (
        <div className='bg-white p-5'>
            <TabTitle title={'Your Review'}></TabTitle>
            <div className='mb-5 bg-gray-100 p-5'>
            <div className='w-28 '>
            <p className='font-bold text-[#2B3467] mb-3 flex items-center gap-1'>Rating <FaStar></FaStar></p>
                <Rating orientation='horizontal' value={rating} onChange={setRating}></Rating>
            </div>
            </div>
            <div className='mb-5 bg-gray-100 p-5'>
                    <p className='font-bold text-[#2B3467] mb-3 flex items-center gap-1'>Name <FaUser></FaUser></p>
                    <input className='w-1/2 p-3 border-2 focus:outline-none' placeholder='Your Name' type="text" />
                </div>
            <div className='bg-gray-100 p-5'>
                    <p className='font-bold text-[#2B3467] mb-3 flex items-center gap-1'>Review <FaPen></FaPen></p>
                    <textarea className='w-1/2 p-3 border-2 focus:outline-none' placeholder='Your Review' type="text" />
                </div>
                <button className='font-semibold bg-[#EB455F] text-white px-5 py-3 mt-5'>Submit</button>
        </div>
    );
};

export default YourReview;