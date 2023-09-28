import React from 'react';
import { FaCartArrowDown, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between p-5 bg-[#2B3467] text-white font-semibold'>
            <div className='flex gap-5'>
                <Link to="/"><p className='border-b-2 border-white'>Home</p></Link>
                <p className='border-b-2 border-white'>Product</p>
            </div>
            <div className='flex text-xl gap-5'>
                <Link to="/productcart"><p><FaCartArrowDown></FaCartArrowDown></p></Link>
                <p><FaUser></FaUser></p>
            </div>
        </div>
    );
};

export default Header;