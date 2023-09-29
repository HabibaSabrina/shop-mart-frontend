import React from 'react';
import { FaArrowCircleLeft, FaDollarSign, FaTruck } from "react-icons/fa";

const Info = () => {
    return (
        <div className='flex justify-center gap-28 my-10'>
            {/*section delivery service */}
            <div className='bg-[#2B3467] text-white text-4xl p-5 px-20 shadow-xl'>
                <FaTruck className='mx-auto'></FaTruck>
                <p className='font-semibold text-xl mt-2'>Fastest Delivery</p>
            </div>
            {/* Section money return */}
            <div className='bg-[#2B3467] text-white text-4xl p-5 px-20 shadow-xl'>
                <FaDollarSign className='mx-auto'></FaDollarSign>
                <p className='font-semibold text-xl mt-2'>Money Return Policy</p>
            </div>
            {/* section product return */}
            <div className='bg-[#2B3467] text-white text-4xl p-5 px-20 shadow-xl'>
                <FaArrowCircleLeft className='mx-auto'></FaArrowCircleLeft>
                <p className='font-semibold text-xl mt-2'>Product Return Policy</p>
            </div>
        </div>
    );
};

export default Info;