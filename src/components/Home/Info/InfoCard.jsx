import React from 'react';

const InfoCard = ({icon, info}) => {
    return (
        // card design of the infor section
        <div className='bg-[#2B3467] text-center max-sm:mb-5 text-white text-4xl p-5 md:px-20 shadow-xl'>
            <p className=''>{icon}</p>
            <p className='font-semibold text-xl mt-2'>{info}</p>
        </div>
    );
};

export default InfoCard;