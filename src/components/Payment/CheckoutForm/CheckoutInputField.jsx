import React from 'react';

const CheckoutInputField = ({label, type}) => {
    return (
        <div className='border-2 border-gray-300'>
            <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>{label}</p>
            <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type={type} />
        </div>
    );
};

export default CheckoutInputField;