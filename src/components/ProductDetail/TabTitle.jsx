import React from 'react';

const TabTitle = ({title}) => {
    return (
        <div>
            <p className='bg-[#2B3467] text-white p-3 px-5 mb-5 font-bold'>{title}</p>
        </div>
    );
};

export default TabTitle;