import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';

const SliderComponent = ({ currentIndex, setCurrentIndex, itemsPerPage, products }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const itemsPerPage = 4;

    const nextSlide = () => {
        if (itemsPerPage == 4) {
            setCurrentIndex((prevIndex) =>
                prevIndex + itemsPerPage < products.length ? prevIndex + itemsPerPage - (itemsPerPage-1) : 0
            );
        }
        else {

            setCurrentIndex((prevIndex) =>
                prevIndex + 1 < products.length ? prevIndex + 1 : 0
            );
        }





    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                // If at the beginning, go to the last set of slides
                const lastSetIndex = products.length - itemsPerPage;
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


    const visibleSlides = products.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className=' w-full m-auto py-10 px-4 relative group'>
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