import React from 'react';
import { FaUser } from 'react-icons/fa';

const PersonalInfo = () => {
    return (
   <div className='mb-10'>
    <div>
        <h1 className='text-xl font-bold text-[#2B3467] mb-5 flex items-center gap-3'><span className='text-white bg-[#2B3467] w-7 text-center rounded-full text-xl font-semibold'>1</span> Personal Information <FaUser></FaUser></h1>
        <div>
            <div className='flex gap-5 mb-5'>
            <div className='border-2 border-gray-300'>
            <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>First Name</p>
            <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
            </div>
            <div className='border-2 border-gray-300' >
            <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>Last Name</p>
            <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
            </div>
            </div>
            <div className='flex gap-5 mb-5'>
            <div className='border-2 border-gray-300' >
            <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>Email</p>
            <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
            </div>
            <div className='border-2 border-gray-300' >
            <p className='bg-white w-96 px-5 pt-2 font-bold text-[#2B3467]'>Phone</p>
            <input className='w-96 focus:outline-none px-5 pb-2 border-b-4 border-gray-300' type="text"/>
            </div>
            </div>
        </div>
    </div>
   </div>
    );
};

export default PersonalInfo;