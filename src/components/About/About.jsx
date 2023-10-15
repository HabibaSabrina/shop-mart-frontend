import React from 'react';
import HeadlineDesign from '../DesignComponents/HeadlineDesign';
import { useContext } from 'react';
import { InfoContext } from '../../Provider/InfoProvider';

const About = () => {
    const [info] = useContext(InfoContext);
    const {about} = info;
    return (
        <div className='md:pt-16 pb-20 pt-10 bg-gray-50'>
            {/* headline */}
            <HeadlineDesign headline={'About'} description={'Shopmart Ecommerce is a leading online marketplace offering a diverse range of products and a user-friendly platform for an effortless shopping experience. With top-quality items and reliable delivery, its the ultimate destination for online shoppers.'}></HeadlineDesign>
            {/* description of about section */}
            <div className='p-5'>
            {
                    about && about.map((theAbout, i) => <div key={i} className='md:flex gap-20 md:px-40 pb-10 '>
                        <div key={i} className='md:w-1/2 leading-7'>
                         <p className='text-3xl font-bold text-[#2B3467] mb-5'>{theAbout.title}: {theAbout.tagline}</p>
                         <p className='mb-10'>{theAbout.description}</p>
                    </div>
                    {/* about section image */}
                    <div className='md:w-96 border-4 border-gray-400'>
                    <img className='relative md:-top-5 shadow-lg md:-right-5' src={theAbout.image} alt="" />
                </div>
                    </div>)
                }
            </div>
            
           
        </div>
    );
};

export default About;