import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import PaymentModal from './PaymentModal';

const OrderSummary = () => {
    return (
        <div className='bg-white p-5 border-8 mt-10 border-double'>
            <h1 className='text-xl font-bold text-[#2B3467] mb-5'>Order Summary</h1>
            <p className='border-b-2 border-[#2B3467]'></p>
            <table className='w-96 font-semibold'>
                <tbody>
                <tr>
                    <td className='pb-2 pt-2 text-[#2B3467]'>Subtotal</td>
                    <td>1629$</td>
                </tr>
                <tr>
                    <td className='pb-2 text-[#2B3467]'>Shipping</td>
                    <td>5$</td>
                </tr>
                <tr>
                    <td className='pb-2 text-[#2B3467]'>Estimated Tax</td>
                    <td>5$</td>
                </tr>
                <tr className='border-t-2 border-[#2B3467]'>
                    <td className='pb-2 text-[#2B3467]'>Total</td>
                    <td>1639$</td>
                </tr>
                </tbody>
            </table>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='flex items-center my-5 gap-3 font-semibold bg-[#EB455F] w-full justify-center py-3 text-white'>Confirm Purchase <FaShoppingBag className='text-xl'></FaShoppingBag></button>
            {/* modal of payment */}
            <PaymentModal></PaymentModal>
        </div>
    );
};

export default OrderSummary;