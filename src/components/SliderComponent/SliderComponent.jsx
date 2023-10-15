import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';
import { calculateSlideIndex } from './calculateSlideIndex';



const SliderComponent = ({ currentIndex, setCurrentIndex, itemsPerPage, products }) => {
    // calculating sliding components per page
    const nextSlide = () => {
        const newIndex = calculateSlideIndex(currentIndex, itemsPerPage, 'next', products);
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = calculateSlideIndex(currentIndex, itemsPerPage, 'prev', products);
        setCurrentIndex(newIndex);
    };

    const visibleSlides = products.slice(currentIndex, currentIndex + itemsPerPage);

    
    

    return (
        <div className=' w-full m-auto pt-10 px-4 relative group'>
            {/* product card loop in the slider */}
            <div className='flex'>
                {
                    visibleSlides.map(slide => <ProductCard key={slide.id} slide={slide}></ProductCard>)
                }
            </div>
            {/* Previous Button */}
            <button
            className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-1 text-xl rounded-full p-5 bg-[#2B3467] bg-opacity-80 text-white cursor-pointer'
            onClick={prevSlide}
        >
            <FaArrowLeft></FaArrowLeft>
        </button>
            {/* Next Button */}
            <button
                className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-1 text-xl rounded-full p-5 bg-[#2B3467] bg-opacity-80 text-white cursor-pointer'
                onClick={nextSlide}
            >
                <FaArrowRight></FaArrowRight>
            </button>
        </div>
    );
};

export default SliderComponent;