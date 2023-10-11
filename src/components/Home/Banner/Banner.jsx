import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css"
import BannerCard from './BannerCard';
import BannerInfo from './BannerInfo';
import Marquee from 'react-fast-marquee';
import '../../Products/style.css'
const Banner = () => {
    
    const products = [
        {
            id: 1,
            image: '/public/banner/electronic.jpg',
            name: 'Electronic Item'
        },
        {
            id: 2,
            image: '/public/banner/toys.jpg',
            name: 'Toys and Games'
        },
        {
            id: 3,
            image: '/public/banner/fashion.jpg',
            name: 'Fashion Wear'
        },
        {
            id: 4,
            image: '/public/banner/furniture.png',
            name: 'Home Furniture'
        },
        {
            id: 5,
            image: '/public/banner/jewlery.jpg',
            name: 'Jewelry and Watches'
        },
        {
            id: 6,
            image: '/public/banner/supplies.jpg',
            name: 'Office Supplies'
        },

    ]
   
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className=' bg-gradient-to-b from-[#2B3467] to-gray-300 md:flex items-center gap-20 '>
            {/* Main image of the banner */}
            <img className='md:ml-20 mt-auto' src="/banner/bannerP.png" alt="" />
            {/* Right portion of the banner */}
            <div className=' md:p-10 p-5 md:pt-20' data-aos="fade-right" data-aos-duration={1000}>
                <BannerInfo></BannerInfo>
                {/* banner cards */}
                <div className='md:w-[750px] mt-10 mx-auto'>
                    {/* images card of banner */}
                    <Marquee pauseOnHover={true} speed={60}>
                        {
                            products.map(slide => <BannerCard key={slide.id} slide={slide}></BannerCard>)
                        }
                    </Marquee>

                </div>


            </div>

        </div>

    );
};

export default Banner;