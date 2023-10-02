import React from 'react';
import { FaLock, FaTrash, FaUser } from 'react-icons/fa';
import '../Home/Banner/style.css'
const Login = () => {
    return (
        <div className='banner-bg py-40 '>
            <div className='justify-center flex items-center'>
            <div className='w-1/3 bg-[#2B3467] my-10 p-5 px-10 h-96'>
                <h1 className=' text-white text-3xl font-bold text-center mb-10'>Login</h1>
                <form action="">
                    <div className='flex items-center mb-5'>
                        <p className='border-2 bg-gray100 p-4 text-[#2B3467] bg-gray-100'><FaUser></FaUser></p>
                        <input className='w-full border-2 bg-gray100 p-3' type="text" placeholder='Your Email' />
                    </div>
                    <div className='flex items-center'>
                        <p className='border-2 bg-gray100 p-4 text-[#2B3467] bg-gray-100'><FaLock></FaLock></p>
                        <input className='w-full border-2 bg-gray100 p-3' type="text" placeholder='Your Password' />
                    </div>
                    <div className='flex justify-between mt-3'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" className='cursor-pointer' name="" id=""/>
                        <p className='text-white text-xs font-semibold'>Remember me</p>
                    </div>
                    <p className='text-white text-xs font-semibold'>Forgot Password?</p>
                    </div>
                    <button className='bg-[#EB455F] w-full   font-bold text-white py-3 my-5'>Login</button>
                </form>
                <p className='font-semibold text-white text-center'>Don't have an account? Please <span className='text-white text-center underline'>register</span></p>
            </div>
            {/* <img className='w-96 h-96 border-2' src="/login.jpg" alt="" /> */}
            </div>
        </div>
    );
};

export default Login;