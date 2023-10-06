import React from 'react';

const LogRegInputField = ({ label, type, icon }) => {
    return (
        <div className='flex items-center mb-5 w-full'>
            <p className='border-2 bg-gray100 p-4 text-[#2B3467] bg-gray-100'>{icon}</p>
            <input className='w-full border-2 bg-gray100 p-3' type={type} placeholder={label} />
        </div>
    );
};

export default LogRegInputField;