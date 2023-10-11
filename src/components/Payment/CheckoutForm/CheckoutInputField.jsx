import React from 'react';

const CheckoutInputField = ({label, type, value}) => {
    return (
        <div className='border-2 md:w-96 border-gray-300'>
            <p className='bg-white w-full px-5 pt-2 font-bold text-[#2B3467]'>{label}</p>
            <input className='w-full focus:outline-none px-5 pb-2 border-b-4 border-gray-300' defaultValue={value} type={type} />
        </div>
    );
};

export default CheckoutInputField;