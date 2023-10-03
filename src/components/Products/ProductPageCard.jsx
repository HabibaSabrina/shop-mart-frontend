import React, { useEffect, useState } from 'react';
import { FaCartArrowDown, FaEye, FaShoppingBag, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductPageCard = ({ product }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const {id, image, product_name, price } = product
    const [isHovered, setIsHovered] = useState(null);

    // functions for mouse on the card image or not
    const handleMouseEnter = (id) => {
        setIsHovered(id)
    }
    return (
        <div className='w-50 shadow-xl p-5 bg-white'>
            {/* <img className=' bg-gray-300 p-5' src={image} alt="" /> */}
            {/* for the card when a mouse hover on a image the view button will be pop up */}
            <div className={`w-full h-48  ${isHovered == id ? 'bg-[#2B3467] ' : 'bg-gray-300'} ` } onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={() => handleMouseEnter(null)}>
                {
                    isHovered == id ? <div className='relative '>
                        <img className='w-full opacity-20 p-2 duration-1000 ' src={image} alt="" />
                        <div>
                            <p className='absolute top-3 left-3 text-white font-semibold' data-aos="fade-up" data-aos-duration={1000} >{product_name}</p>
                        <div className='absolute text-xl text-white top-3 right-3' data-aos="fade-up" data-aos-duration={1000}>
                            <FaCartArrowDown className='mb-3'></FaCartArrowDown>
                            <FaEye className='mb-3'></FaEye>
                            <FaShoppingBag></FaShoppingBag>
                        </div>
                        </div>
                    </div> : <img className='p-5 duration-1000' src={image} alt="" />
                }
            </div>
            <p className='text-xl text-[#2B3467] font-semibold text-center my-2'>{product_name}</p>
            <div className='flex justify-between items-center'>
            <div className='flex items-center justify-center text-yellow-400'>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                {/* <p className='text-gray-500 ml-1'>{product.rating}</p> */}
            </div>
            <p className='text-center font-semibold'>{price}$</p>
            </div>
            
            <div>

                <button className='flex items-center gap-3 font-semibold bg-[#EB455F] px-5 justify-center py-2 mx-auto mt-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button>
            </div>
        </div>
    );
};

export default ProductPageCard;