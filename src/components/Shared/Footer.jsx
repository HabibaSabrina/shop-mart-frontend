import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const categories = ['Electronic Item', 'Toys and Games', 'Fashion Wear', 'Home Furniture', 'Jewelry and Watches', 'Office Supplies']
    return (
        <div className='bg-[#1a1f3d] p-10 md:flex justify-center leading-7 gap-32 text-gray-200'>
            <div className='md:w-96'>
                <img className='w-1/2' src="/logo.png" alt="" />
                <p className='mt-2'>Shopmart is an online retail website that offers a wide range of products for purchase, including electronics, fashion items, home goods, and more. Customers can browse and buy products conveniently from their website.</p>
            </div>
            <div className='flex gap-32 max-sm:my-10'>
                <div className=''>
                    <p className='pb-2 font-bold text-white'>Categories</p>
                    {
                        categories.map((category, i) => <p key={i}>{category}</p>)
                    }
                </div>
                <div className=''>
                    <p className='pb-2 font-bold text-white'>Useful Links</p>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Payment</p>
                    <p>Product Cart</p>
                </div>
            </div>
            <div className=''>
                <p className='pb-2 font-bold text-white'>Contact</p>
                <p className='flex gap-2 mb-2 items-center'><FaMapMarkerAlt></FaMapMarkerAlt> Address: Dhaka, Bangladesh</p>
                <p className='flex gap-2 mb-2 items-center'><FaPhoneAlt></FaPhoneAlt> Phone: 017111111111</p>
                <p className='flex gap-2 mb-2 items-center'><FaEnvelope></FaEnvelope>Email: shopmart@gmail.com</p>
                <div className='text-xl flex gap-3 items-center'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaTwitter></FaTwitter>
                </div>

            </div>
        </div>
    );
};

export default Footer;