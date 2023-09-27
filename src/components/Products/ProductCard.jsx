import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaCartArrowDown, FaShoppingBag } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
const ProductCard = ({product}) => {
    const {product_name, image, price, product_group} = product
    const [isHovered, setIsHovered] = useState(false);
    const [rating, setRating] = useState(0)
    const handleMouseEnter = () =>{
        setIsHovered(true)
    }
    const handleMouseLearve = () =>{
        setIsHovered(false)
        console.log(isHovered)
    }
    return (
        <div className='w-72 shadow-xl'>
            <div className={`w-full h-72 ${isHovered ? 'bg-[#2B3467]' : 'bg-gray-300'} `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLearve}>
            {
               isHovered? <div className='relative'>
                <img className='opacity-20' src={image} alt=""  />
                <button className='border-2  rounded-xl bg-[#EB455F] absolute top-32 left-20 p-3 px-5 font-semibold text-white '>View Details</button>
               </div> : <img className='p-5' src={image} alt=""  />
            }
            </div>
            {/* <div className='px-5 mt-5 flex justify-between items-center'>
                <p className='bg-[#2B3467] text-center p-1 px-5 rounded-full text-sm text-white font-semibold'>{product_group}</p>
                <p className='text-xl bg-[#EB455F] p-3 rounded-full text-white'><FaCartArrowDown></FaCartArrowDown></p>
            </div> */}
            <div className='text-center pt-3'>
            <p className='text-[#2B3467] text-xl font-semibold'>{product_name}</p>
            <p className='font-semibold text-gray-600'>{price} $</p>
            </div>
            <div className='flex my-3 px-3 justify-between items-center'>
                <p className='text-center  rounded-full text-sm text-gray-500 font-semibold'>{product_group}</p>
                <div className='w-28'>
                <Rating className='' orientation='horizontal' value={rating} onChange={setRating} />
                </div>
                
            </div>
            <div>
                <button className='flex items-center gap-3 font-semibold bg-[#EB455F] w-full justify-center py-3 text-white'>Add to Cart <FaCartArrowDown className='text-xl'></FaCartArrowDown></button>
                <button className='flex items-center gap-3 font-semibold bg-[#2B3467] w-full justify-center py-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button>
            </div>
        </div>
    );
};

export default ProductCard;