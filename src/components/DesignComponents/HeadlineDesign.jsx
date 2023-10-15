import React from 'react';
import '../BackgroundStyle/style.css'
import AosInitializer from '../../animation/AosInitializer';
const HeadlineDesign = ({headline, description}) => {
    
    return (
        <div className=' flex items-center mb-20 w-full justify-center gap-20 bg-opacity-80 leading-7 bg-gray-200 p-6 shadow-md' data-aos="fade-down" data-aos-duration={1000} >
            <AosInitializer></AosInitializer>
            <div className='md:w-1/2 text-center'>
                <div className='mb-2'>
                <h1 className='text-3xl font-bold text-[#2B3467] mb-1'>{headline}</h1>
                {/* <p className='bg-[#2B3467] w-8 h-1 mx-auto'></p> */}
                </div>
                <p className=''>{description}</p>
            </div>
        </div>
    );
};

export default HeadlineDesign;