import React from 'react';

const About = () => {
    return (
        <div className='py-20 md:px-40 bg-gray-50'>
            <h1 className='text-center text-3xl font-semibold text-[#2B3467] mb-20'>About</h1>
            <div className='md:flex gap-20'>
                <div className='md:w-1/2 leading-7'>
                    <p className='text-3xl max-sm:p-5 font-bold text-[#2B3467] mb-5'>Our Journey: A Legacy of Shopping Excellence</p>
                    <p>Discover the essence of Shop Mart&apos;s remarkable journey in our &quot;Our Story&quot; section. Established in 2023, we&apos;ve grown from a small online store to a global e-commerce powerhouse. Rooted in values of quality and affordability, our customer-centric approach has driven our success. We embrace innovation, employ cutting-edge technology, and prioritize sustainability. Shop Mart is more than a retailer; it&apos;s a community engaged in charitable initiatives. As we look ahead, we&apos;re committed to expanding our offerings and enhancing your shopping experience. Join us in shaping the future as we continue to write the inspiring story of Shop Mart together. Thank you for being a part of our journey.</p>
                </div>
                <div className='w-96 border-4 border-gray-400'>
                    <img className='relative -top-5 shadow-lg -right-5' src="/public/office.jpg" alt="" />
                </div>
            </div>
            <div className='md:flex gap-20 mt-20'>
                <div className='w-96 border-4 border-gray-400'>
                    <img className='relative -top-5 shadow-lg -left-5' src="/public/office.jpg" alt="" />
                </div>
                <div className='md:w-1/2 max-sm:p-5 leading-7'>
                    <p className='text-3xl font-bold text-[#2B3467] mb-5'>Our Mission: Transforming Shopping into an Extraordinary Experience</p>
                    <p>Discover the essence of Shop Mart&apos;s remarkable journey in our &quot;Our Story&quot; section. Established in [year], we&apos;ve grown from a small online store to a global e-commerce powerhouse. Rooted in values of quality and affordability, our customer-centric approach has driven our success. We embrace innovation, employ cutting-edge technology, and prioritize sustainability. Shop Mart is more than a retailer; it&apos;s a community engaged in charitable initiatives. As we look ahead, we&apos;re committed to expanding our offerings and enhancing your shopping experience. Join us in shaping the future as we continue to write the inspiring story of Shop Mart together. Thank you for being a part of our journey.</p>
                </div>

            </div>
        </div>
    );
};

export default About;