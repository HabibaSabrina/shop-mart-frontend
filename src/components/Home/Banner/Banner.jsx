import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='bg-yellow-200 flex items-center gap-20 '>
            {/* Main image of the banner */}
            <img className='ml-20 mt-auto' src="/bannerP.png" alt="" />
            {/* Right portion of the banner */}
            <div className='bg-purple-300 p-10 ' data-aos="fade-left" data-aos-duration={1000}>
                <h1 className='text-4xl font-bold text-blue-900'>Welcome to ShopMart</h1>
                <p className='text-gray-700 my-5'>ShopMart, the ultimate e-commerce platform, offers a diverse range of products, easy navigation, and secure transactions. Find top brands, competitive prices, and swift delivery, making your online shopping experience a breeze. Shop smart, shop with ShopMart today!</p>
                <button className='bg-red-600 text-white font-semibold p-3 px-10 rounded'>Shop Now</button>
                {/* banner cards */}
                <div className='flex gap-10 text-center mt-10'>
                <div className='bg-white p-3 animate-pulse hover:animate-none'>
                    <img className='w-96' src="/public/slider/electronic.jpg" alt="" />
                    <p className='my-3 font-semibold text-blue-900'>Electronic Item</p>
                </div>
                <div className='bg-white p-3 animate-pulse hover:animate-none'>
                    <img className='w-96' src="/public/slider/fashion.jpg" alt="" />
                    <p className='my-3 font-semibold text-blue-900'>Fashion Wear</p>
                </div>
                <div className='bg-white p-3 animate-pulse hover:animate-none'>
                    <img className='w-96' src="/public/slider/furniture.png" alt="" />
                    <p className='my-3 font-semibold text-blue-900'>Home Furniture</p>
                </div>
            </div>
                
            </div>
            
        </div>
        
    );
};

export default Banner;