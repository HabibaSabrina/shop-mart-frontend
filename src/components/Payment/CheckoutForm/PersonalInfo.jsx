import React from 'react';
import { FaUser } from 'react-icons/fa';
import CheckoutInputField from './CheckoutInputField';

const PersonalInfo = () => {
    return (
   <div className='mb-10'>
    <div>
        <h1 className='text-xl font-bold text-[#2B3467] mb-5 flex items-center gap-3'><span className='text-white bg-[#2B3467] w-7 text-center rounded-full text-xl font-semibold'>1</span> Personal Information <FaUser></FaUser></h1>
        <div>
            <div className='flex gap-5 mb-5'>
            <CheckoutInputField label={'First Name'} type={'text'}></CheckoutInputField>
            <CheckoutInputField label={'Last Name'} type={'text'}></CheckoutInputField>
            </div>
            <div className='flex gap-5 mb-5'>
            <CheckoutInputField label={'Email'} type={'email'}></CheckoutInputField>
            <CheckoutInputField label={'Phone'} type={'text'}></CheckoutInputField>

            </div>
        </div>
    </div>
   </div>
    );
};

export default PersonalInfo;