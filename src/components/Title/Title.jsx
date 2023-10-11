import React from 'react';

const Title = ({title, subTitle}) => {
    return (
        <div>
            <h1 className=' border-[#2B3467] text-[#2B3467] text-center text-3xl font-semibold w-80 p-2 mx-auto '>{title}</h1>
            <div className='w-12 bg-[#2B3467] h-1 mx-auto'></div>
        <p className='text-center mx-auto mt-5 mb-5 text-gray-600 md:w-1/2'>{subTitle}</p>
        </div>
    );
};

export default Title;