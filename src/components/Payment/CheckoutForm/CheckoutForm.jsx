import React from 'react';
import PersonalInfo from './PersonalInfo';
import BillingAddress from './BillingAddress';
import OrderSummary from './OrderSummary';
import HeadlineDesign from '../../DesignComponents/HeadlineDesign';

const CheckoutForm = () => {
    return (
        <div className='md:pt-16 pt-10 bg-gray-100'>
            <HeadlineDesign headline={'Checkout'} description={'Shopmart Ecommerce offers a seamless payment experience with multiple options, including credit/debit cards and digital wallets, ensuring convenient and secure transactions for online shoppers.'}></HeadlineDesign>
            <div className='md:flex p-5 justify-center py-5 items-start gap-20 '>
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