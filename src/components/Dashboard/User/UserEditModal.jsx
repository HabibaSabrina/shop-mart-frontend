import React from 'react';
import CheckoutInputField from '../../Payment/CheckoutForm/CheckoutInputField';
import { FaPen } from 'react-icons/fa';

const UserEditModal = ({setShowEdit, userData}) => {
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-100 absolute top-24 md:w-1/2 rounded shadow-md">
                <div className='relative'>
                    <p className='bg-[#2B3467] text-white p-3 font-bold'>Edit User Details</p>
                    <div className='p-5'>
                        <div className='flex gap-5 mb-5'>
                        <CheckoutInputField label={'Name'} type={'text'} value={userData.name}></CheckoutInputField>
                        <CheckoutInputField label={'Email'} type={'email'} value={userData.email}></CheckoutInputField>
                        </div>
                        <div className='flex gap-5 mb-5'>
                        <CheckoutInputField label={'Phone'} type={'text'} value={userData.phone}></CheckoutInputField>
                        <CheckoutInputField label={'Address'} type={'text'} value={userData.address}></CheckoutInputField>
                        </div>
                        <div className='flex gap-5 mb-5'>
                        <CheckoutInputField label={'Old Password'} type={'password'} ></CheckoutInputField>
                        <CheckoutInputField label={'New Password'} type={'password'} ></CheckoutInputField>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#EB455F] flex items-center text-white gap-3 px-10 py-3 my-5 font-semibold text-xl'>Edit <FaPen></FaPen></button>
                        </div>
                    </div>
                    <button
                        className="mt-2 absolute -top-7 -right-4 rounded-full bg-[#EB455F] hover:bg-[#c93c51] text-white font-bold py-2 px-4"
                        onClick={() => setShowEdit(false)}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserEditModal;