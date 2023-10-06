import React from 'react';
import { FaAngleRight, FaBlackTie, FaChair, FaGamepad, FaTablet } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className='w-1/2 overflow-y-auto pt-20 bg-slate-900 h-screen '>
        <div className='text-white font-semibold py-3 hover:bg-black hover:bg-opacity-20 cursor-pointer  px-3 flex items-center justify-between'><p className='flex items-center gap-3'><FaTablet></FaTablet>Electronics Items</p> <FaAngleRight></FaAngleRight></div>
        <div className='text-white font-semibold py-3 hover:bg-black hover:bg-opacity-20 cursor-pointer  px-3 flex items-center justify-between '><p className='flex items-center gap-3'><FaBlackTie></FaBlackTie>Fashion Wear</p><FaAngleRight></FaAngleRight></div>
        <div className='text-white font-semibold py-3 hover:bg-black hover:bg-opacity-20 cursor-pointer  px-3 flex items-center justify-between '> <p className='flex items-center gap-3'><FaGamepad></FaGamepad> Toyes and games</p> <FaAngleRight></FaAngleRight></div>
        <div className='text-white font-semibold py-3 hover:bg-black hover:bg-opacity-20 cursor-pointer  px-3 flex items-center justify-between '><p className='flex items-center gap-3'><FaChair></FaChair>Furniture</p><FaAngleRight></FaAngleRight></div>
    </div>
    );
};

export default SideBar;