import React from 'react';
import { FaCheck, FaGift, FaTruck, FaUser } from 'react-icons/fa';

const OrderProgress = ({status}) => {
    // info of the progress bar
    const progressBar = [
        {title: 'Order Confirmed', icon:<FaCheck className='bg-[#EB455F] p-2 mx-auto text-white rounded-full w-8 h-8'/>},
        {title: 'Picked by courier', icon:<FaUser className='bg-[#EB455F] p-2 mx-auto text-white rounded-full w-8 h-8'/>},
        {title: 'On the way', icon:<FaTruck className='bg-[#EB455F] p-2 mx-auto text-white rounded-full w-8 h-8'/>},
        {title: 'Ready to pick up', icon:<FaGift className='bg-[#EB455F] p-2 mx-auto text-white rounded-full w-8 h-8'/>},
    ]
    return (
        <div className='my-5 px-3'>
            {/* progress line */}
            <div className=' md:mx-14 rounded-full h-2 relative top-5 flex'>
                <p className='bg-[#EB455F] w-1/2 h-full'></p>
                <p className={`${status == 'Delivered' ? 'bg-[#EB455F]' : 'bg-gray-300'}  w-1/2 h-full`}></p>
            </div>
            {/* the progress bar of an order */}
            <div className='flex relative justify-between z-10'>
                {
                    progressBar.map((progress, i) => <div key={i}>
                    {progress.icon}
                    <p className="my-2 font-semibold">{progress.title}</p>
                </div>)
                }
            </div>
        </div>
    );
};

export default OrderProgress;