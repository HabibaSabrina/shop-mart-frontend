import React from 'react';
import { FaTruck } from 'react-icons/fa';
import InputFieldTwo from '../../DesignComponents/InputFieldTwo';


const BillingAddress = () => {
    return (
        <div className='mb-10'>
            {/* billing form of the checkout */}
        <div>
            <h1 className='text-xl font-bold text-[#2B3467] mb-5 flex gap-3 items-center'><span className='text-white bg-[#2B3467] rounded-full text-xl font-semibold w-7 text-center'>2</span> Billing Address <FaTruck className='text-3xl'></FaTruck></h1>
            <div>
                {/* input fields */}
                <div className='flex gap-5 mb-5'>
                <InputFieldTwo label={'Street Address'} type={'text'}></InputFieldTwo>
                <InputFieldTwo label={'City'} type={'text'}></InputFieldTwo>
                </div>
                <div className='flex gap-5 mb-5'>
                <InputFieldTwo label={'State'} type={'text'}></InputFieldTwo>
                <InputFieldTwo label={'Zip Code'} type={'text'}></InputFieldTwo>

                </div>
            </div>
        </div>
       </div>
    );
};

export default BillingAddress;