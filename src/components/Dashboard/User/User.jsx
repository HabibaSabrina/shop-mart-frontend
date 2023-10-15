import React from 'react';
// import 'react-tabs/style/react-tabs.css';

import '../../BackgroundStyle/style.css'
import ActivityTabs from './ActivityTabs';
import UserDetail from './UserDetail';

const User = () => {
   
    return (
        <div className='py-28 bg-gray-50 md:flex gap-20 items-start justify-center'>
            {/* user details page */}
            <UserDetail></UserDetail>
            {/* activity of the users */}
            <div className='md:w-1/2'>
                <p className='text-xl font-bold bg-[#2B3467] text-white p-5 mb-5 '>Activity</p>
                <ActivityTabs></ActivityTabs>
            </div>
        </div>
    );
};

export default User;