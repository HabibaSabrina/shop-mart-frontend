import React from 'react';
// import 'react-tabs/style/react-tabs.css';

import '../../Home/Banner/style.css'
import { FaEdit } from 'react-icons/fa';
import ActivityTabs from './ActivityTabs';
import UserDetail from './UserDetail';
const User = () => {
    return (
        <div className='pt-28 md:flex gap-20 items-start justify-center'>
            <UserDetail></UserDetail>
            <div className='md:w-1/2'>
                <p className='text-xl font-bold bg-[#2B3467] text-white p-5 mb-5 '>Activity</p>
                <ActivityTabs></ActivityTabs>
            </div>
        </div>
    );
};

export default User;