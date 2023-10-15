import React from 'react';
import { FaUser } from 'react-icons/fa';
import InputFieldTwo from '../../DesignComponents/InputFieldTwo';

const PersonalInfo = () => {
    return (
   <div className='mb-10'>
    {/* personal info form of checkout form */}
    <div>
        <h1 className='text-xl font-bold text-[#2B3467] mb-5 flex items-center gap-3'><span className='text-white bg-[#2B3467] w-7 text-center rounded-full text-xl font-semibold'>1</span> Personal Information <FaUser></FaUser></h1>
        <div>
            {/* input field of the personal info form */}
            <div className='flex gap-5 mb-5'>
            <InputFieldTwo label={'First Name'} type={'text'}></InputFieldTwo>
            <InputFieldTwo label={'Last Name'} type={'text'}></InputFieldTwo>
            </div>
            <div className='flex gap-5 mb-5'>
            <InputFieldTwo label={'Email'} type={'email'}></InputFieldTwo>
            <InputFieldTwo label={'Phone'} type={'text'}></InputFieldTwo>

            </div>
        </div>
    </div>
   </div>
    );
};

export default PersonalInfo;