import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCartArrowDown, FaShoppingBag } from 'react-icons/fa';
import TopProductCard from './TopProductCard';

const TopProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const topProduct = products.filter(prod => prod.rating > 3)
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage < topProduct.length ? prevIndex + itemsPerPage - 3 : 0
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                // If at the beginning, go to the last set of slides
                // const lastSetIndex = products.length - itemsPerPage;
                const lastSetIndex = topProduct.length - itemsPerPage;
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


    const visibleSlides = topProduct.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className='my-20'>
            <h1 className='border-y-2 border-[#2B3467] border-dashed text-[#2B3467] text-center text-3xl font-semibold w-96 p-2 mx-auto'>Top Rated Products</h1>
            <p className='text-center mx-auto mt-5 mb-5 text-gray-600 w-1/2'>Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.</p>
            {/* Card */}

            <div className=' w-full m-auto py-10 px-4 relative group'>
                <div className='flex'>
                  {
                    visibleSlides.map(slide => <TopProductCard key={slide.id} slide={slide}></TopProductCard>)
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

        </div>
    );
};

export default TopProduct;