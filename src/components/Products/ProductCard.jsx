import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaCartArrowDown, FaShoppingBag } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import { addToDb } from '../../utilities/fakeDb';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const {id, product_name, image, price, product_group} = product
    const [isHovered, setIsHovered] = useState(false);
    const [rating, setRating] = useState(0)
    // functions for mouse on the card image or not
    const handleMouseEnter = () =>{
        setIsHovered(true)
    }
    const handleMouseLeave = () =>{
        setIsHovered(false)
        console.log(isHovered)
    }
    const handleProductCart = id =>{
        addToDb(id)
    }
    return (
        // Card design
        <div className='w-72 shadow-xl'>
            {/* for the card when a mouse hover on a image the view button will be pop up */}
            <div className={`w-full h-72 ${isHovered ? 'bg-[#2B3467]' : 'bg-gray-300'} `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {
               isHovered? <div className='relative'>
                <img className='opacity-20' src={image} alt=""  />
                <Link to={`/product/${id}`}><button className=' bg-[#EB455F] absolute top-32 left-20 p-3 px-5 font-semibold text-white '>View Details</button></Link>
               </div> : <img className='p-5' src={image} alt=""  />
            }
            </div>
            
            <div className='text-center pt-3'>
            <p className='text-[#2B3467] text-xl font-semibold'>{product_name}</p>
            <p className='font-semibold text-gray-600'>{price} $</p>
            </div>
            {/* Product rating option */}
            <div className='flex my-3 px-3 justify-between items-center'>
                <p className='text-center  rounded-full text-sm text-gray-500 font-semibold'>{product_group}</p>
                <div className='w-28'>
                <Rating orientation='horizontal' value={rating} onChange={setRating} />
                </div>
                
            </div>
            {/* card buttons */}
            <div>
                <button onClick={() => handleProductCart(id)} className='flex items-center gap-3 font-semibold bg-[#EB455F] w-full justify-center py-3 text-white'>Add to Cart <FaCartArrowDown className='text-xl'></FaCartArrowDown></button>
                <Link to={`/payment/${id}`}><button className='flex items-center gap-3 font-semibold bg-[#2B3467] w-full justify-center py-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button></Link>
            </div>
        </div>
    );
};

export default ProductCard;