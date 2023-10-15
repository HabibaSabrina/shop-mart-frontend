import React, { useEffect } from 'react';
import { useState } from 'react';
import NavItems from './NavItems';
import { FaBars, FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';

const Header = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [open, setOpen] = useState(false)
    
    // setting navbar to change the style according to the position
    const [pos, setPos] = useState("top")
    useEffect(() => {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5) {
                setPos("moved")
            } else {
                setPos("top")
            }
        })
    }, [])
    // nav bar items
    const navLink = [
        { to: '/', label: 'Home' },
        { to: '/product', label: 'Product' },
        { to: '/payment', label: 'Payment' },
        { to: '/history', label: 'Payment History' },
        { to: '/about', label: 'About' },
        { to: '/faq', label: 'FAQ' },
        { to: '/user', label: 'Dashboard' },
        

    ];
    const [showSearch, setShowSearch] = useState(false)
    return (

        <div className={` p-5 ${pos == "top" || 'bg-opacity-90 duration-1000'} bg-[#2B3467] shadow text-white duration-1000 py-4 font-semibold fixed w-full z-30`} >
            {/* for mobile responsive */}
            {/* for desktop responsive */}
            <div className=''>
                <div className='flex items-center justify-between'>
                    {/* left side items of navbar */}
                    <div className='flex items-center gap-10'>
                        <img className='w-32 max-sm:absolute left-14' src="/logo.png" alt="" />
                            <button className='md:hidden absolute' onClick={() => setOpen(!open)}>{open ? <p className=' '>X</p> : <FaBars></FaBars>}</button>
                       <div className={`md:flex absolute md:static max-sm:p-3 md:bg-opacity-0 items-center gap-10 ${open ? 'bg-[#2B3467] top-[59px]' : 'bg-[#2B3467] -top-64'} ${pos == "top" || 'bg-opacity-90 duration-1000'}`}>
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
                    </div>
                    {/* right side items of navbar */}
                    <div className='flex items-center gap-5'>
                        <button onClick={() => setShowSearch(true)} className='text-white text-xl' ><FaSearch></FaSearch></button>
                        <Link to="/productcart"><p><FaCartArrowDown className='text-xl'></FaCartArrowDown></p></Link>
                        <Link to='/login'><p><FaUser className='text-xl'></FaUser></p></Link>
                        {
                            showSearch && <SearchModal setShowSearch={setShowSearch} ></SearchModal>
                        }

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Header;