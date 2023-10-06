import React from 'react';
import { FaTruck } from 'react-icons/fa';
import CheckoutInputField from './CheckoutInputField';

const BillingAddress = () => {
    return (
        <div className='mb-10'>
        <div>
            <h1 className='text-xl font-bold text-[#2B3467] mb-5 flex gap-3 items-center'><span className='text-white bg-[#2B3467] rounded-full text-xl font-semibold w-7 text-center'>2</span> Billing Address <FaTruck className='text-3xl'></FaTruck></h1>
            <div>
                <div className='flex gap-5 mb-5'>
                <CheckoutInputField label={'Street Address'} type={'text'}></CheckoutInputField>
                <CheckoutInputField label={'City'} type={'text'}></CheckoutInputField>

                </div>
                <div className='flex gap-5 mb-5'>
                <CheckoutInputField label={'State'} type={'text'}></CheckoutInputField>
                <CheckoutInputField label={'Zip Code'} type={'text'}></CheckoutInputField>

                </div>
            </div>
        </div>
       </div>
    );
};

export default BillingAddress;