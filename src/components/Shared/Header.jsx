import React, { useState } from 'react';
import { FaCartArrowDown, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState(false)
    const handleClick = () => {
        if(search){
            setSearch(false)
            console.log(search)
        }
        else{
            setSearch(true)
            console.log(search)
        }
        // setSearch((prevIsClicked) => !prevIsClicked);
      };
    
    return (
        // header of the website
        <div className='flex items-center justify-between p-5 bg-[#090933] text-white h-16 font-semibold bg-opacity-80 fixed w-full z-30'>
            <div className='flex'>
                <Link to="/"><p className='border-b-2 hover:translate-x-1 duration-500 transform  hover:w-24 text-center mx-5 border-white'>Home</p></Link>
                
                
                <p className='border-b-2 hover:translate-x-1 duration-500 transform  hover:w-24 text-center mx-5 border-white'>Product</p>
                <Link to="/history"><p className=' hover:translate-x-1 duration-500 transform  hover:w-40 text-center mx-5 border-b-2 border-white'>Payment History</p></Link>
            </div>
            <div className='flex items-center gap-5'>
            {
                search && <form action="">
                <input className='px-3 p-1 font-normal text-black w-64' type="text" name="" id="" placeholder='Search Text' />
                {/* <button className='-ml-6 z-10 text-[#2B3467] bg-white' ><FaSearch></FaSearch></button> */}
                
                
            </form>
            }
                <button onClick={handleClick} className='text-white text-xl' ><FaSearch></FaSearch></button>
                <Link to="/productcart"><p><FaCartArrowDown className='text-xl'></FaCartArrowDown></p></Link>
                <p><FaUser className='text-xl'></FaUser></p>
                
            </div>
        </div>
    );
};

export default Header;