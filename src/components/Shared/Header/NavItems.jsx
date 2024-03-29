import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavItems = ({ to, label, index, onMouseEnter, onMouseLeave, isActive }) => (

    <div className={`relative mx-auto max-sm:mb-2`} key={index}>
        <Link to={to}>
            <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='text-center flex items-center gap-1'>{label} {index == 1 && <FaAngleDown className='text-xl max-sm:-rotate-90'></FaAngleDown>}</p>
        </Link>
        <div className={`md:border absolute ${isActive ? 'w-full duration-1000 border-white' : 'w-0 border-transparent duration-700'}`}></div>
        {/* nav items of the product link */}
        {(isActive && index == 1) && (
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className='absolute w-40 bg-[#2B3467] pt-4 md:top-7 max-sm:left-32 max-sm:top-0'
            >
                <div className='py-2 px-3 hover:bg-black hover:bg-opacity-30 cursor-pointer duration-300'>
                    <p>Electronic Items</p>
                </div>
                <p className='py-2 px-3 hover:bg-black hover:bg-opacity-30 cursor-pointer duration-300'>Fashion Wear</p>
                <p className='py-2 px-3 hover:bg-black hover:bg-opacity-30 cursor-pointer duration-300'>Toys and Games</p>
            </div>
        )}
    </div>
);

export default NavItems;