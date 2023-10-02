import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Products from '../Products/Products';
import TopProduct from '../TopProduct/TopProduct';
import BestSellerProduct from '../BestSellerProduct/BestSellerProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <TopProduct></TopProduct>
            <BestSellerProduct></BestSellerProduct>
        </div>
    );
};

export default Home;