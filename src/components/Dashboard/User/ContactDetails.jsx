import React from 'react';
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';

const ContactDetails = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between p-3 bg-[#2B3467]'>
                <h1 className='text-xl font-semibold  text-white'>Contact Details</h1>
                <button className='text-white text-xl'><FaEdit></FaEdit></button>
            </div>
            <div className='bg-gray-100 p-5'>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Name<FaUser></FaUser></p>
                    <p>Raisa Khan</p>
                </div>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Email <FaEnvelope></FaEnvelope></p>
                    <p>user@gmail.com</p>
                </div>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Phone <FaPhoneAlt></FaPhoneAlt></p>
                    <p>01799992344</p>
                </div>
                <div className='bg-white p-2 mb-4 shadow-xl'>
                    <p className='font-semibold flex items-center gap-2'>Address<FaMapMarkerAlt></FaMapMarkerAlt></p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;