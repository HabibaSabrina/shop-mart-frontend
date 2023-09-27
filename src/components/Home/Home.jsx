import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Products></Products>
        </div>
    );
};

export default Home;