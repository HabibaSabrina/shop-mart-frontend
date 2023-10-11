import React from 'react';
import { FaCamera, FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import ContactDetails from './ContactDetails';

const UserDetail = () => {
    return (
        <div className='md:w-96'>
        <div className='banner-bg p-8'>
            <div className='relative'>
            <img className='w-24 rounded-full mx-auto border-4 border-[#2B3467]' src="/user/girl.jpg" alt="" />
            <button className='bg-[#EB455F] text-white p-2 rounded-full absolute right-28 top-16'><FaCamera></FaCamera></button>
            </div>
            <p className='text-xl font-semibold text-center text-[#2B3467]'>Raisa Khan</p>
        </div>
        {/* users contact information */}
        <ContactDetails></ContactDetails>
        
    </div>
    );
};

export default UserDetail;