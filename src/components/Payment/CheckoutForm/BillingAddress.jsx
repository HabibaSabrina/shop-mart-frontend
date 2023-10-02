import React from 'react';
import { FaTruck } from 'react-icons/fa';

const BillingAddress = () => {
    return (
        <div className='mb-10'>
        <div>
            <h1 className='text-xl font-bold text-[#2B3467] mb-5 flex gap-3 items-center'><span className='text-white bg-[#2B3467] rounded-full text-xl font-semibold w-7 text-center'>2</span> Billing Address <FaTruck className='text-3xl'></FaTruck></h1>
            <div>
                <div className='flex gap-5 mb-5'>
                <div className='border-2 border-gray-300' >
                <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>Street Address</p>
                <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
                </div>
                <div className='border-2 border-gray-300' >
                <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>City</p>
                <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
                </div>
                </div>
                <div className='flex gap-5 mb-5'>
                <div className='border-2 border-gray-300' >
                <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>State</p>
                <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
                </div>
                <div className='border-2 border-gray-300' >
                <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>Zip Code</p>
                <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
                </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default BillingAddress;