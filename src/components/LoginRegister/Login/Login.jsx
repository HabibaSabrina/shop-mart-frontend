import React from 'react';
import { FaLock, FaTrash, FaUser } from 'react-icons/fa';
import '../../BackgroundStyle/style.css'
import { Link } from 'react-router-dom';
import InputFieldOne from '../../DesignComponents/InputFieldOne';
const Login = () => {
    return (
        <div className='banner-bg py-40 '>
            <div className='justify-center md:flex items-center'>
            <div className='md:w-1/3 bg-[#2B3467] p-5 px-10 h-96'>
                <h1 className=' text-white text-3xl font-bold text-center mb-10'>Login</h1>
                <form action="">
                    {/* input field of login */}
                    <InputFieldOne label={'Your Email'} type={'email'} icon={<FaUser></FaUser>}></InputFieldOne>
                    <InputFieldOne label={'Your Password'} type={'password'} icon={<FaLock></FaLock>}></InputFieldOne>
                    {/* remember me and forgot password section */}
                    <div className='flex justify-between mt-3'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" className='cursor-pointer' name="" id=""/>
                        <p className='text-white text-xs font-semibold'>Remember me</p>
                    </div>
                    <p className='text-white text-xs font-semibold'>Forgot Password?</p>
                    </div>
                    {/* login button */}
                    <button className='bg-[#EB455F] w-full   font-bold text-white py-3 my-5'>Login</button>
                </form>
                {/* registration link */}
                <p className='font-semibold text-white text-center'>Don&apos;t have an account? Please <Link to='/register'><span className='text-white text-center underline'>register</span></Link></p>
            </div>
            
            </div>
        </div>
    );
};

export default Login;