import React from 'react';
import { FaCheck } from 'react-icons/fa';
import OrderProgress from './OrderProgress';

const OrderTrack = ({ theOrder, onClose }) => {
    console.log(theOrder)
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
            <div className="bg-white absolute top-24 mx-5 md:w-1/2 rounded shadow-md">
                <div className='relative'>
                    <p className='bg-[#2B3467] text-white p-3 font-bold'>My Order</p>
                    <div className='p-5'>
                        <div className='flex justify-between mb-5'>
                            <p><b>Order Id:</b> {theOrder.orderId}</p>
                            <p><b>Order Date:</b> {theOrder.date}</p>
                        </div>
                        <div className='flex md:justify-between gap-5 py-3 md:px-3 border-y-2'>
                            <div>
                                <p className='font-bold text-[#2B3467]'>Estimated Delivery Time</p>
                                <p>27-10-2023</p>
                            </div>
                            <div>
                                <p className='font-bold text-[#2B3467]'>Shipping By</p>
                                <p>Shundarban Courier</p>
                            </div>
                            <div>
                                <p className='font-bold text-[#2B3467]'>Status</p>
                                <p>{theOrder.status}</p>
                            </div>
                            <div>
                                <p className='font-bold text-[#2B3467]'>Tracking</p>
                                <p>BD{theOrder.orderId}</p>
                            </div>
                        </div>
                        <OrderProgress status={theOrder.status}></OrderProgress>

                    </div>
                    <button
                        className="mt-2 absolute -top-1 md:-top-7 right-0 md:-right-4 rounded-full bg-[#EB455F] hover:bg-[#c93c51] text-white font-bold py-2 px-4"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderTrack;