import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';

import TopProduct from '../TopProduct/TopProduct';
import BestSellerProduct from '../BestSellerProduct/BestSellerProduct';
import UserReviews from '../UserReviews/UserReviews';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <TopProduct></TopProduct>
            <BestSellerProduct></BestSellerProduct>
            <ContactUs></ContactUs>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;