import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Provider/ProductProvider';
import SliderComponent from '../SliderComponent/SliderComponent';
import Title from '../DesignComponents/Title/Title';
import AosInitializer from '../../animation/AosInitializer';
import useResponsiveItemsPerPage from '../../hooks/useResponsiveItemsPerPage';

const TopProduct = () => {

    const [products] = useContext(ProductContext)
    const topProduct = products.filter(prod => prod.rating > 3)
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = useResponsiveItemsPerPage(4, 1100); //items per page when responsive

    
    return (
        <div className='pb-20 bg-gray-50'>
             {/* title of the best seller section */}
            <Title title={'Top Rated Products'} subTitle={'Discover a world of diverse products at your fingertips, from cutting-edge electronics to fashionable apparel, all available on our e-commerce platform. Shop with convenience and choice at its finest.'}></Title>

            {/* Card */}
            <SliderComponent
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                itemsPerPage={itemsPerPage}
                products={topProduct}>
            </SliderComponent>


        </div>
    );
};

export default TopProduct;