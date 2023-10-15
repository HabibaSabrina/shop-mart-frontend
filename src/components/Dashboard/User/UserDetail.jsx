import React from 'react';
import { FaCamera } from 'react-icons/fa';
import ContactDetails from './ContactDetails';
import { UserContext } from '../../../Provider/UserProvider';
import { useContext } from 'react';

const UserDetail = () => {
    const [user] = useContext(UserContext)
    return (
        <div className='md:w-96'>
        <div className='banner-bg p-8'>
            {/* user information */}
            <div className='relative'>
            <img className='w-24 rounded-full mx-auto border-4 border-[#2B3467]' src={user.user_image} alt="" />
            <button className='bg-[#EB455F] text-white p-2 rounded-full absolute right-28 top-16'><FaCamera></FaCamera></button>
            </div>
            <p className='text-xl font-semibold text-center text-[#2B3467]'>{user.name}</p>
        </div>
        {/* users contact information */}
        <ContactDetails user={user}></ContactDetails>
        
    </div>
    );
};

export default UserDetail;