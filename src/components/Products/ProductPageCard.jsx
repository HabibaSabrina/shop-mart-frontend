import React, { useEffect, useState } from 'react';
import { FaCartArrowDown, FaEye, FaShoppingBag } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Products/style.css'
import CardDetail from './CardDetail';
import '../Home/Banner/style.css'

const ProductPageCard = ({ product }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { id, image, product_name, price, description } = product
    const [isHovered, setIsHovered] = useState(null);

    // functions for mouse on the card image or not
    const handleMouseEnter = (id) => {
        setIsHovered(id)
    }
    console.log(isHovered)

    return (
        <div className='h-97 shadow-2xl banner-bg  mt-16'>
            {/* card image section */}
            <div className='relative -top-14 flex justify-center items-center'>
                <div className='bg-gradient-to-t from-gray-500 to-white absolute w-48 h-48 rounded-full'></div>
                <img className='relative w-48 mx-auto' src={image} alt="" />
            </div>
            <p className='text-xl text-[#2B3467] font-bold text-center -mt-10'>{product_name}</p>
            {/* card details section */}
            <div className='card-bg'>
                <div className={`w-full  mt-3 relative`} onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={() => handleMouseEnter(null)}>
                   {/* condition on mouse hover */}
                    {
                        isHovered &&  
                        <div className='absolute flex justify-center gap-5 top-0 bg-black w-full h-full backdrop-blur-sm text-gray-50 bg-opacity-50' >
                        <div className='flex gap-5 top-20 text-2xl absolute' >
                        <FaEye data-aos="fade-up" data-aos-duration={1000}></FaEye>
                        <FaShoppingBag data-aos="fade-up" data-aos-duration={1000}></FaShoppingBag>
                        <FaCartArrowDown data-aos="fade-up" data-aos-duration={1000}></FaCartArrowDown>
                        </div>
                        </div>
                    }
                 
                    <CardDetail description={description} price={price}></CardDetail>
                    

                </div>
            </div>


        </div>
    );
};

export default ProductPageCard;