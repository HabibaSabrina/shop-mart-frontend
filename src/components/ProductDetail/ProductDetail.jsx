import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "../Home/Banner/style.css"
import { FaCartArrowDown, FaShoppingBag } from 'react-icons/fa';
const ProductDetail = () => {
    // loading product data
    const proData = useLoaderData();
    const proId = useParams();
    // finding the specific product
    const theData = proData.filter(pro => pro.id == proId.id)
    const { product_name, image, price, product_group, description } = theData[0]
    
    return (
        <div className='banner-bg md:p-32 md:px-64 relative'>
            {/* button to get back to the home page */}
            <Link to="/"><button className='font-semibold bg-[#2B3467] rounded-full px-3 hover:bg-slate-600 text-white text-xl p-1 absolute md:right-60 md:top-28 top-5 right-5'>X</button></Link>
            {/* Product Detail Card */}
            <div className='md:grid grid-cols-3 r gap-20 bg-transparent shadow-2xl rounded-xl p-10'>
                <div className='text-center md:my-10 md:border-r-2  md:pr-10'>
                    <img className='w-96 mt-5 mx-auto border-4 border-[#2B3467]' src={image} alt="" />
                    <p className='text-2xl font-semibold text-[#2B3467] my-5'>{product_name}</p>
                </div>
                <div className='col-span-2 text-gray-600'>
                    <h1 className='text-3xl font-semibold text-[#2B3467] mb-10 text-center'>Product Details</h1>
                    <table className='text-xl font-semibold mx-auto'>
                        <tr>
                            <td className=' text-[#2B3467] w-52'>Product Name:</td>
                            <td>{product_name}</td>
                        </tr>
                        <tr >
                            <td className='py-10 text-[#2B3467]'>Description:</td>
                            <td>{description}</td>
                        </tr>
                        <tr>
                            <td className=' text-[#2B3467]'>Price:</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td className='py-5 text-[#2B3467]'>Product Type:</td>
                            <td>{product_group}</td>
                        </tr>

                    </table>
                    <div className='flex gap-10'>
                        <button className='flex items-center gap-3 font-semibold bg-[#EB455F] w-full justify-center py-3 text-white'>Buy <FaShoppingBag className='text-xl'></FaShoppingBag></button>
                        <button className='flex items-center gap-3 font-semibold bg-[#2B3467] w-full justify-center py-3 text-white'>Add to Cart <FaCartArrowDown className='text-xl'></FaCartArrowDown></button>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default ProductDetail;