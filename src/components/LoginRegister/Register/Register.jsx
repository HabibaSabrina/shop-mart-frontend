import React from 'react';
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';
import '../../Home/Banner/style.css'
import LogRegInputField from '../LogRegInputField';

const Register = () => {
    return (
        <div className='banner-bg py-40 '>
            <div className='justify-center flex items-center '>
                <div className=' bg-[#2B3467] my-10 p-5 px-10 w-2/3 '>
                    <h1 className=' text-white text-3xl font-bold text-center mb-10'>Register</h1>
                    <form action="">
                        {/* name  */}
                        <div className='flex gap-10 mb-5'>
                            <LogRegInputField label={'First Name'} type={'text'} icon={<FaUser></FaUser>}></LogRegInputField>
                            <LogRegInputField label={'Last Name'} type={'text'} icon={<FaUser></FaUser>}></LogRegInputField>
                            
                        </div>
                        {/* email and phone */}
                        <div className='flex gap-10 mb-5'>
                        <LogRegInputField label={'Email'} type={'email'} icon={<FaEnvelope></FaEnvelope>}></LogRegInputField>
                        <LogRegInputField label={'Phone'} type={'text'} icon={<FaPhoneAlt></FaPhoneAlt>}></LogRegInputField>

                        </div>
                        {/* password */}
                        <div className='flex gap-10 mb-5'>
                        <LogRegInputField label={'Password'} type={'password'} icon={<FaLock></FaLock>}></LogRegInputField>
                        <LogRegInputField label={'Confirm Password'} type={'password'} icon={<FaLock></FaLock>}></LogRegInputField>
                        </div>
                        {/* privacy and policy */}
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" className='cursor-pointer' name="" id="" />
                            <p className='text-white text-xs font-semibold'>I accept the privacy and policy</p>
                        </div>
                        {/* register */}
                        <div className='text-center'>
                            <button className='bg-[#EB455F] w-96   font-bold text-white py-3 my-5'>Register</button>
                        </div>
                    </form>
                    <p className='font-semibold text-white text-center'>Already have an account? Please <span className='text-white text-center underline'>Login</span></p>
                </div>
                {/* <img className='w-96 h-96 border-2' src="/login.jpg" alt="" /> */}
            </div>
        </div>
    );
};

export default Register;