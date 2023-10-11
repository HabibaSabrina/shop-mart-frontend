import React from 'react';
import { useState } from 'react';
import NavItems from './NavItems';
import { FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';

const Header = () => {
    const [activeItem, setActiveItem] = useState(null);
    console.log(activeItem)


    const navLink = [
        { to: '/', label: 'Home' },
        { to: '/product', label: 'Product' },
        { to: '/payment', label: 'Payment' },
        { to: '/history', label: 'Payment History' },
        { to: '/about', label: 'About' },
        
    ];
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className='flex items-center justify-between p-5 bg-[#2B3467] shadow text-white duration-1000 h-16 font-semibold fixed w-full z-30' >
            <div className='flex items-center gap-10'>
                <img className='w-32' src="/logo.png" alt="" />
                {
                    navLink.map((item, index) =>
                        <NavItems
                            key={index}
                            index={index}
                            isActive={activeItem === index}
                            onMouseEnter={() => setActiveItem(index)}
                            onMouseLeave={() => setActiveItem(null)}
                            {...item}
                        />
                    )
                }
            </div>
            <div className='flex items-center gap-5'>
                <button onClick={() =>setShowSearch(true)} className='text-white text-xl' ><FaSearch></FaSearch></button>
                <Link to="/productcart"><p><FaCartArrowDown className='text-xl'></FaCartArrowDown></p></Link>
                <p><FaUser className='text-xl'></FaUser></p>
                {
                    showSearch && <SearchModal setShowSearch={setShowSearch} ></SearchModal>
                }

            </div>
        </div >
    );
};

export default Header;