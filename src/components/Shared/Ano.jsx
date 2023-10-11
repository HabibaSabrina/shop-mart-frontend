import React from 'react';
import { useState } from 'react';
import { FaAngleDown, FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavItem = ({ to, label, index, onMouseEnter, onMouseLeave, isActive }) => (

    <div className={`relative mx-auto duration-700`} key={index}>
        <Link to={to}>
            <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='text-center flex items-center gap-1'>{label} {index == 1 && <FaAngleDown className='text-xl'></FaAngleDown>}</p>
        </Link>
        <div className={`border absolute ${isActive ? 'w-full duration-1000 border-white' : 'w-0 border-transparent duration-700'}`}></div>
        {(isActive && index == 1) && (
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className='absolute w-40 bg-[#2B3467] pt-4 top-7'
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

const Ano = () => {
    const [activeItem, setActiveItem] = useState(null);
    console.log(activeItem)


    const navLink = [
        { to: '/', label: 'Home' },
        { to: '/product', label: 'Product' },
        { to: '/payment', label: 'Payment' },
        { to: '/history', label: 'Payment History' },
        { to: '/about', label: 'About' },
        // Add more navigation items as needed
    ];
    return (
        <div className='flex items-center justify-between p-5 bg-[#2B3467] shadow text-white duration-1000 h-16 font-semibold fixed w-full z-30' >
            <div className='flex items-center gap-10'>
                <img className='w-32' src="/logo.png" alt="" />
                {
                    navLink.map((item, index) =>
                        <NavItem
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
                <button onClick={() => document.getElementById('my_modal_2').showModal()} className='text-white text-xl' ><FaSearch></FaSearch></button>
                <Link to="/productcart"><p><FaCartArrowDown className='text-xl'></FaCartArrowDown></p></Link>
                <p><FaUser className='text-xl'></FaUser></p>

            </div>
        </div >

        // <div className={`flex items-center justify-between p-5 ${pos == "top" || 'bg-opacity-90 duration-1000'} bg-[#2B3467] shadow text-white duration-1000 h-16 font-semibold fixed w-full z-30`}>
        //     <div className='flex items-center gap-10'>
        //         <img className='w-32' src="/logo.png" alt="" />

        //         <div className={`relative mx-auto duration-700`}>
        //             <Link to="/"><p onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseLeave()} className='text-center'>Home</p></Link>
        //             <div className={`border  absolute ${mouse == 1 ? 'w-full duration-1000 border-white' : 'w-0 border-transparent duration-700'}`}></div>

        //         </div>
        //         <div className={`relative mx-auto duration-700`}>
        //             <Link to="/"><p onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave()} className='text-center'>Product</p></Link>
        //             <div className={`border  absolute ${mouse == 2 ? 'w-full duration-1000 border-white' : 'w-0 border-transparent duration-700'}`}></div>
        //             {
        //                 mouse == 2 && <div onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseLeave()} className='absolute w-40 bg-[#2B3467] pt-4 top-7'>
        //                     <div className='py-2 px-3 hover:bg-black hover:bg-opacity-30 cursor-pointer duration-300'><p>Electronic Items</p>
        //                     </div>
        //                     <p className='py-2 px-3 hover:bg-black hover:bg-opacity-30 cursor-pointer duration-300'>Fashion Wear</p>
        //                     <p className='py-2 px-3 hover:bg-black hover:bg-opacity-30 cursor-pointer duration-300'>Toys and games</p>
        //                 </div>
        //             }


        //         </div>
        //         <div className={`relative mx-auto duration-700`}>
        //             <Link to="/payment"><p className='text-center'>Payment</p></Link>
        //             <div className={`border  absolute ${mouse == 3 ? 'w-full duration-1000 border-white' : 'w-0 border-transparent duration-700'}`}></div>

        //         </div>
        //         <div className={`relative mx-auto duration-700`}>
        //             <Link to="/history"><p onMouseEnter={() => mouseEnter(4)} onMouseLeave={() => mouseLeave()} className='text-center'>Payment History</p></Link>
        //             <div className={`border  absolute ${mouse == 4 ? 'w-full duration-1000 border-white' : 'w-0 border-transparent duration-700'}`}></div>

        //         </div>



        //     </div>
        //     {/* <div className='flex items-center gap-5'>
        //         <button onClick={() => document.getElementById('my_modal_2').showModal()} className='text-white text-xl' ><FaSearch></FaSearch></button>
        //         <Link to="/productcart"><p><FaCartArrowDown className='text-xl'></FaCartArrowDown></p></Link>
        //         <p><FaUser className='text-xl'></FaUser></p>

        //     </div> */}
        //     {/* modal for the search */}
        //     {/* <dialog id="my_modal_2" className="modal bg-black bg-opacity-50">
        //         <div className="modal-box rounded-none bg-gray-50">
        //             <form className='flex bg-white' action="">
        //                 <input className='border-2 focus:outline-none p-2 w-full text-black font-normal' type="text" placeholder='Search Text' />
        //                 <button className='bg-[#EB455F] text-xl p-3'><FaSearch></FaSearch></button>
        //             </form>
        //         </div>
        //         <form method="dialog" className="modal-backdrop">
        //             <button>close</button>
        //         </form>
        //     </dialog> */}
        // </div>
    );
};

export default Ano;