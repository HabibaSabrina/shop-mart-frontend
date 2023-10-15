import React, { useContext, useEffect, useState } from 'react';
import BannerCard from './BannerCard';
import BannerInfo from './BannerInfo';
import Marquee from 'react-fast-marquee';
import '../../BackgroundStyle/style.css'
import { InfoContext } from '../../../Provider/InfoProvider';
const Banner = () => {
    const [info] = useContext(InfoContext) //fetching data
    const {products} = info 
    return (
        <div className=' bg-gradient-to-b from-[#2B3467] to-gray-300 md:flex items-center gap-20 '>
            
            {/* Main image of the banner */}
            <img className='md:ml-20 md:mt-auto max-sm:pt-20' src="/banner/bannerP.png" alt="" />
            {/* Right portion of the banner */}
            <div className=' md:p-10 p-5 md:pt-20' data-aos="fade-down" data-aos-duration={1000}>
                <BannerInfo></BannerInfo>
                {/* banner cards */}
                <div className='md:w-[750px] mt-10 mx-auto'>
                    {/* images card of banner */}
                    <Marquee pauseOnHover={true} speed={60}>
                        {
                           products && products.map(slide => <BannerCard key={slide.id} slide={slide}></BannerCard>)
                        }
                    </Marquee>

                </div>


            </div>

        </div>

    );
};

export default Banner;