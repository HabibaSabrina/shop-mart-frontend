import React, { useState } from 'react';
import '@smastrom/react-rating/style.css'

import { FaCartArrowDown, FaShoppingBag } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const ProductCard = ({slide}) => {
    const [isHovered, setIsHovered] = useState(null);
    const [rating, setRating] = useState(0)
    // functions for mouse on the card image or not
    const handleMouseEnter = (id) =>{
        setIsHovered(id)
    }
    return (
        <div className=' w-full mx-10 bg-white h-full shadow-2xl duration-1000'>
        {/* for the card when a mouse hover on a image the view button will be pop up */}
        <div className={`w-full h-72  ${isHovered == slide.id ? 'bg-[#2B3467]' : 'bg-gray-300'} `}  onMouseEnter={() => handleMouseEnter(slide.id)} onMouseLeave={() => handleMouseEnter(null)}>
         {
            isHovered == slide.id ? <div className='relative '>
             <img className='opacity-20' src={slide.image} alt=""  />
             <Link to={`/product/${slide.id}`}><button className=' bg-[#EB455F] absolute top-32 left-20 p-3 px-5 font-semibold text-white ' data-aos="fade-up" data-aos-duration={1000}>View Details</button></Link>
            </div> : <img className='p-5' src={slide.image} alt=""  />
         }
         </div>
         {/* product info */}
         <div className='text-center pt-3'>
         <p className='text-[#2B3467] text-xl font-semibold'>{slide.product_name}</p>
         <p className='font-semibold text-gray-600'>{slide.price} $</p>
         </div>
         {/* Product rating option */}
         <div className='flex my-3 px-3 justify-between items-center'>
             <p className='text-center  rounded-full text-sm text-gray-500 font-semibold'>{slide.product_group}</p>
             <div className='w-28'>
             <Rating orientation='horizontal' value={rating} onChange={setRating} />
             </div>
             
         </div>
         {/* card buttons */}
         <div>
             <button className='flex items-center gap-3 font-semibold bg-[#EB455F] w-full justify-center py-3 text-white'>Add to Cart <FaCartArrowDown className='text-xl'></FaCartArrowDown></button>
             <button className='flex items-center gap-3 font-semibold bg-[#2B3467] w-full justify-center py-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button>
         </div>
       </div>
    );
};

export default ProductCard;