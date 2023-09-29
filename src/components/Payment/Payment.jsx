import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payemnt_Gateway_PK)
const Payment = () => {
    return (
        <div className='bg-gray-100 py-10 pb-48'>
            {/* header of payment page */}
            <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center text-3xl font-semibold w-96 p-2 mx-auto '>Make Your Payment</h1>
            <p className='text-center mt-3'>Please fulfill the payment to buy the product</p>
            {/* section of the payment form */}
           <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements> 
        </div>
    );
};

export default Payment;