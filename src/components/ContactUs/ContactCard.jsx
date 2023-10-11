import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactCard = ({icon, title, description}) => {
    return (
        <div className='md:w-56 w-full h-48 mx-auto shadow-xl md:-mt-28 z-20 text-center bg-gray-50 p-5'>
            <div className='text-center text-3xl w-14 p-3 rounded-full mx-auto text-[#EB455F] border-2 border-[#EB455F]'>
           <p className='text-center'> {icon}</p>
            </div>
            <p className='font-bold text-xl my-2 text-[#2B3467]'>{title}</p>
            <p className='font-semibold text-gray-600'>{description}</p>
        </div>
    );
};

export default ContactCard;