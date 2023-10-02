import React from 'react';

const BannerCard = ({slide, currentIndex, itemsPerPage}) => {
    return (
        <div className='flex duration-500'
        >
            <div className='bg-white p-3 h-full transition-transform scroll-smooth duration-1000'>
                    <img className='w-96' src={slide.image} alt="" />
                    <p className='my-3 font-semibold text-blue-900 text-center'>{slide.name}</p>
                </div>
        </div>
                
    );
};

export default BannerCard; 