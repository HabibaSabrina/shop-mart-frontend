import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../Home/Banner/style.css'
import '../Products/style.css'
import Title from '../Title/Title';

const UserReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('/datasets/userReviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(0)
    // let itemsPerPage = 3;
    useEffect(() => {
        
        if(window.innerWidth <700)
        {
            setItemsPerPage(1)
        }
        else{
            setItemsPerPage(3)

        }
    },[])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage < reviews.length ? prevIndex + itemsPerPage-(itemsPerPage-1) : 0
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                // If at the beginning, go to the last set of slides
                // const lastSetIndex = reviews.length - itemsPerPage;
                const lastSetIndex = reviews.length - itemsPerPage;
                return lastSetIndex;
            } else if (prevIndex % itemsPerPage === 0) {
                // If at the beginning of a set, go to the previous set
                return prevIndex - itemsPerPage;
            } else {
                // Otherwise, just go back one slide
                return prevIndex - 1;
            }
        }
        );
    };


    const visibleSlides = reviews.slice(currentIndex, currentIndex + itemsPerPage);
    return (
        <div className=' mb-10'>
            {/* review section title */}
            <Title title={'Customer Reviews'} subTitle={'Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.'}></Title>
            {/* review section slide */}
            <div className='md:mx-10 py-10 md:px-4 relative group'>
                <div className='flex gap-10 w-full '>
                    {visibleSlides.map((slide) => (
                        <div key={slide.id} className=' mx-auto p-5 card-bg w-3/4 h-[300px] shadow-2xl duration-1000'>
                            {/* for the card when a mouse hover on a image the view button will be pop up */}
                            <div className='p-5'>
                                <img className=' w-28 rounded-full border-8 border-white border-double mx-auto' src={slide.user_image} alt="" />
                            </div>
                            <div className='w-28 mx-auto'>
                                <Rating orientation='horizontal' value={slide.rating} />


                            </div>

                            <div className='text-center pt-3'>
                                <p className='text-white text-xl font-semibold'>{slide.review}</p>
                            </div>

                        </div>
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