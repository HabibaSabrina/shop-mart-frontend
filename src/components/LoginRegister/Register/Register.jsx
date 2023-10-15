import React from 'react';
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';
import '../../BackgroundStyle/style.css'

import { Link } from 'react-router-dom';
import InputFieldOne from '../../DesignComponents/InputFieldOne';

const Register = () => {
    // register page input fields placeholder
    const regField = [
        [{ label: 'First Name', type: 'text', icon: <FaUser></FaUser> },
        { label: 'Last Name', type: 'text', icon: <FaUser></FaUser> }],
        [{ label: 'Email', type: 'email', icon: <FaEnvelope></FaEnvelope> },
        { label: 'Phone', type: 'text', icon: <FaPhoneAlt></FaPhoneAlt> }],
        [{ label: 'Password', type: 'password', icon: <FaLock></FaLock> },
        { label: 'Confirm Password', type: 'password', icon: <FaLock></FaLock> }],

    ]
    return (
        <div className='banner-bg py-40 '>
            <div className='justify-center md:flex items-center '>
                <div className=' bg-[#2B3467] my-10 p-5 px-10 md:w-2/3 '>
                    <h1 className=' text-white text-3xl font-bold text-center mb-10'>Register</h1>
                    {/* Registration form input fields */}
                    <form action="">
                    {
                            regField.map((regPair, i) => <div key={i} className='md:flex gap-10 mb-5'>
                                {
                                    regPair.map((reg, i) => <InputFieldOne key={i} label={reg.label} type={reg.type} icon={reg.icon}></InputFieldOne>)
                                }
                            </div>)


                        }
                        
                        {/* privacy and policy */}
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" className='cursor-pointer' name="" id="" />
                            <p className='text-white text-xs font-semibold'>I accept the privacy and policy</p>
                        </div>
                        {/* register button*/}
                        <div className='text-center'>
                            <button className='bg-[#EB455F] md:w-96 w-full  font-bold text-white py-3 my-5'>Register</button>
                        </div>
                    </form>
                    <p className='font-semibold text-white text-center'>Already have an account? Please <Link to='/login'><span className='text-white text-center underline'>Login</span></Link></p>
                </div>
               
            </div>
        </div>
    );
};

export default Register;