import React from 'react';
import PersonalInfo from './PersonalInfo';
import BillingAddress from './BillingAddress';
import OrderSummary from './OrderSummary';

const CheckoutForm = () => {
    return (
        <div className='pt-20 bg-gray-100'>
            <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center text-3xl font-semibold w-96 p-2 mx-auto my-10'>Checkout</h1>
            <div className='flex justify-center py-5 items-start gap-20 '>
                <div>
                    {/* Personal information */}
                    <PersonalInfo></PersonalInfo>
                    {/* Billing Address */}
                    <BillingAddress></BillingAddress>
                </div>
                {/* order summary */}
                <OrderSummary></OrderSummary>
            </div>


        </div>
    );
};

export default CheckoutForm;