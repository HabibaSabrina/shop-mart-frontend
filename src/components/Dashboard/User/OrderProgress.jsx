import React from 'react';
import { FaCheck, FaGift, FaTruck, FaUser } from 'react-icons/fa';

const OrderProgress = ({status}) => {
    return (
        <div className='my-5 px-3'>
            <div className=' md:mx-14 rounded-full h-2 relative top-5 flex'>
                <p className='bg-[#EB455F] w-1/2 h-full'></p>
                <p className={`${status == 'Delivered' ? 'bg-[#EB455F]' : 'bg-gray-300'}  w-1/2 h-full`}></p>
            </div>
            <div className='flex relative justify-between z-10'>
                <div>
                    <FaCheck className='bg-[#EB455F] p-2 mx-auto text-white rounded-full w-8 h-8 '/>
                    <p className="my-2 font-semibold">Order Confirmed</p>
                </div>
                <div>
                    <FaUser className='bg-[#EB455F] p-2 text-white mx-auto rounded-full w-8 h-8 '/>
                    <p className="my-2 font-semibold">Picked by courier</p>
                </div>
                <div>
                    <FaTruck className='bg-[#EB455F] p-2 text-white mx-auto rounded-full w-8 h-8 '/>
                    <p className="my-2 font-semibold">On the way</p>
                </div>
                <div>
                    <FaGift className='bg-[#EB455F] p-2 text-white mx-auto rounded-full w-8 h-8 '/>
                    <p className="my-2 font-semibold">Ready to pick up</p>
                </div>
            </div>
        </div>
    );
};

export default OrderProgress;