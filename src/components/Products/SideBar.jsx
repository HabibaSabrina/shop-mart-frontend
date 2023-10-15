import React from 'react';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaAngleUp, FaBars, FaBlackTie, FaChair, FaGamepad, FaTablet } from 'react-icons/fa';

const SideBar = () => {
    const categories = [
        { icon: <FaTablet />, label: 'Electronics Items' },
        { icon: <FaBlackTie />, label: 'Fashion Wear' },
        { icon: <FaGamepad />, label: 'Toys and Games' },
        { icon: <FaChair />, label: 'Furniture' },
      ];
      const [open, setOpen] = useState(false)
    return (
        
        <div className='md:w-1/2 md:overflow-y-auto md:pt-20 pt-14 bg-slate-900 md:h-screen'>
            <button onClick={() => setOpen(!open)} className='text-white md:hidden text-2xl px-4'>{open ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}</button>
       <div className={`absolute md:static bg-slate-900 z-30 ${open ? 'top-[85px]' : '-top-48'}`}>
       {categories.map((category, index) => (
        <div key={index} className={`text-white font-semibold py-3 hover:bg-black hover:bg-opacity-20 cursor-pointer px-3 flex items-center justify-between `}>
          <div className='flex items-center gap-3'>
            <p>{category.icon}</p>
           <p> {category.label}</p>
          </div>
          <FaAngleRight className='max-sm:hidden' />
        </div>
      ))}
       </div>
    </div>
    );
};

export default SideBar;