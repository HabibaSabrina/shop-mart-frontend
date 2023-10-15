import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../BackgroundStyle/style.css'
import Title from '../DesignComponents/Title/Title';
import useResponsiveItemsPerPage from '../../hooks/useResponsiveItemsPerPage';
import { useContext } from 'react';
import { ProductContext } from '../../Provider/ProductProvider';
import UserReviewSlide from './UserReviewSlide';
import { calculateSlideIndex } from '../SliderComponent/calculateSlideIndex';

const UserReviews = () => {
    const [products] = useContext(ProductContext) //fetching data
    const allReviews = [];
    products.forEach((product) => {
        allReviews.push(...product.reviews); // finding all the reviews
      });
      const goodReviews = allReviews.filter(rev => rev.rating>4) //finding good reviews
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = useResponsiveItemsPerPage(3, 1100); //tems per page
     // calculating sliding components per page
    const nextSlide = () => {
        const newIndex = calculateSlideIndex(currentIndex, itemsPerPage, 'next', goodReviews);
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = calculateSlideIndex(currentIndex, itemsPerPage, 'prev', goodReviews);
        setCurrentIndex(newIndex);
    };

    const visibleSlides = goodReviews.slice(currentIndex, currentIndex + itemsPerPage);
    return (
        <div className='bg-gray-50 pb-20'>
            {/* review section title */}
            <Title title={'Customer Reviews'} subTitle={'Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.'}></Title>
            {/* review section slide */}
            <div className='md:mx-10 py-10 md:px-4 relative group'>
                <div className='flex gap-10 w-full '>
                    {visibleSlides.map((slide, i) => (
                        <UserReviewSlide key={i} slide={slide}></UserReviewSlide>
                    ))}

                </div>
                {/* Previous Button */}
                <button
                    className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-3 md:-left-10 text-xl rounded-full p-5 bg-[#2B3467] bg-opacity-80 text-white cursor-pointer'
                    onClick={prevSlide}
                >
                    <FaArrowLeft></FaArrowLeft>
                </button>
                {/* Next Button */}
                <button
                    className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-3 md:-right-10 text-xl rounded-full p-5 bg-[#2B3467] bg-opacity-80 text-white cursor-pointer'
                    onClick={nextSlide}
                >
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

export default UserReviews;