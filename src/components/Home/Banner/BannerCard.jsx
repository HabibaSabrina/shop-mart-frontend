import React from 'react';

const BannerCard = ({slide}) => {
//    banner card design
    return (
        <div className='mx-5 duration-500 '
        >
            <div className='bg-white p-3 h-full '>
                    <img className='w-48 duration-200' src={slide.image} alt="" />
                    <p className='my-3 font-semibold text-blue-900 text-center'>{slide.name}</p>
                </div>
        </div>
                
    );
};

export default BannerCard; 