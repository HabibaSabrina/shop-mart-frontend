import React from 'react';
import { FaArrowCircleLeft, FaDollarSign, FaTruck } from "react-icons/fa";
import InfoCard from './InfoCard';

const Info = () => {
    return (
        // content of info section
        <div className='md:flex bg-gray-50 justify-center p-5 gap-28 py-20' >
            <InfoCard icon={<FaTruck className='mx-auto'/>} info={'Fastest Delivery'}></InfoCard>
            <InfoCard icon={<FaDollarSign className='mx-auto'/>} info={'Money Return Policy'}></InfoCard>
            <InfoCard icon={<FaArrowCircleLeft className='mx-auto'/>} info={'Product Return Policy'}></InfoCard>
        </div>
    );
};

export default Info;