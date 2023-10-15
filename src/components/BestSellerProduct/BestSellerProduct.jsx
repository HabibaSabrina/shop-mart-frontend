import React, { useContext, useEffect, useState } from 'react';

import { ProductContext } from '../../Provider/ProductProvider';
import SliderComponent from '../SliderComponent/SliderComponent';
import Title from '../DesignComponents/Title/Title';
import useResponsiveItemsPerPage from '../../hooks/useResponsiveItemsPerPage';
const BestSellerProduct = () => {
    const [products] = useContext(ProductContext)
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = useResponsiveItemsPerPage(4, 1100); //items per page when responsive

    return (
        <div className='bg-gray-50'>
            {/* title of the best seller section */}
            <Title title={'Best Seller Products'} subTitle={'Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.'}></Title>
            {/* Card */}
            <SliderComponent
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                itemsPerPage={itemsPerPage}
                products={products}>
            </SliderComponent>

        </div>
    );
};

export default BestSellerProduct;