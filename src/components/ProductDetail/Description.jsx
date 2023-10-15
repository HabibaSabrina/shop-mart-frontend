import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaCartArrowDown, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';

const Description = ({ theData }) => {
    const { product_name, image, price, colors, product_group, description, rating } = theData
    return (
        <div className='md:w-2/5 max-sm:mt-5'>
            {/* product info */}
            <h1 className='text-2xl text-white p-3 font-bold bg-[#2B3467]'>{product_name}</h1>
            <div className='px-4'>
                <p className='text-xl font-semibold my-2'>{price}$</p>
                <div className='w-28 mb-2'>
                    <Rating orientation='horizontal' value={rating} />
                </div>
                <p>{description}</p>
                <div>
                    <p className='font-bold mb-2 mt-5'>Available Colors</p>
                    <div className='flex gap-3'>
                        {
                            colors.map((color, i) => <p key={i} className='w-8 h-8' style={{ backgroundColor: color.hex_code }}></p>)
                        }
                        
                    </div>
                </div>
                {/* buttons of product details pages */}
                <div className='flex md:gap-10 gap-2 my-5 items-center'>
                    <div className='flex items-center md:gap-5 gap-3'>
                        <FaPlus className='bg-[#2B3467] text-white text-2xl p-2 rounded-full'></FaPlus>
                        <p className='text-xs font-semibold'>1</p>
                        <FaMinus className='bg-[#2B3467] text-white text-2xl p-2 rounded-full'></FaMinus>


                    </div>
                    <button className='bg-[#2B3467] text-white px-5 py-2 flex items-center gap-3 font-semibold'>Add to Cart <FaCartArrowDown></FaCartArrowDown></button>
                    <button className='bg-[#2B3467] text-white px-5 py-2 flex items-center gap-3 font-semibold'>Buy Now <FaShoppingBag></FaShoppingBag></button>
                </div>
            </div>
        </div>
    );
};

export default Description;