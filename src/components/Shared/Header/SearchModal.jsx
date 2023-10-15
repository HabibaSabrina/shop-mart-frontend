import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchModal = ({ setShowSearch }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={() => setShowSearch(false)}>
            <div className="bg-gray-100 w-96 absolute top-52 shadow-md">
                {/* input field of search bar */}
                <div className="relative rounded-none bg-gray-50 p-5">
                    <form className='flex bg-white' action="">
                        <input className='border-2 focus:outline-none p-2 w-full text-black font-normal' type="text" placeholder='Search Text' />
                        <button className='bg-[#EB455F] text-xl p-3'><FaSearch></FaSearch></button>
                    </form>
                </div>
                
            </div>
        </div>

       
    );
};

export default SearchModal;