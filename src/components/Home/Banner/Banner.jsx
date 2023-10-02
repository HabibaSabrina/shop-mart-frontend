import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import BannerCard from './BannerCard';
import BannerInfo from './BannerInfo';
const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
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
    const slideInterval = 2000;
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage < products.length ? prevIndex + itemsPerPage - 2 : 0
        );
    };
    // Automatic sliding logic
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, slideInterval);

        return () => {
            clearInterval(intervalId); // Clean up the interval when the component unmounts
        };
    });

    
    const visibleSlides = products.slice(currentIndex, currentIndex + itemsPerPage);
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className=' bg-gradient-to-l from-[#2B3467] to-gray-300 flex items-center gap-20 '>
            {/* Main image of the banner */}
            <img className='ml-20 mt-auto' src="/bannerP.png" alt="" />
            {/* Right portion of the banner */}
            <div className=' p-10 pt-20' data-aos="fade-left" data-aos-duration={1000}>
                <BannerInfo></BannerInfo>
                {/* banner cards */}
                <div className=' w-full m-auto py-10 px-4 relative group'>
                    <div className=' flex gap-5 duration-500'>
                        {
                            visibleSlides.map(slide => <BannerCard key={slide.id} slide={slide}  currentIndex={currentIndex} itemsPerPage={itemsPerPage}></BannerCard>)
                        }
                    </div>
                    
                </div>
               

            </div>

        </div>

    );
};

export default Banner;