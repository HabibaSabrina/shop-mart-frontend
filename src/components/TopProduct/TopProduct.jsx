import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Provider/ProductProvider';
import SliderComponent from '../SliderComponent/SliderComponent';
import Title from '../Title/Title';

const TopProduct = () => {

    const [products] = useContext(ProductContext)
    const topProduct = products.filter(prod => prod.rating > 3)
    const [currentIndex, setCurrentIndex] = useState(0);
    // const itemsPerPage = 4;
    // Set different itemsPerPage values based on screen size
    const [itemsPerPage, setItemsPerPage] = useState(0)
    // let itemsPerPage = 3;
    useEffect(() => {
        
        if(window.innerWidth <700)
        {
            setItemsPerPage(1)
        }
        else{
            setItemsPerPage(4)

        }
    },[])
    
    return (
        <div className='my-10'>
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