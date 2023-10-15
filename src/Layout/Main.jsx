import React from 'react';
// import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header/Header';
import AosInitializer from '../animation/AosInitializer';

const Main = () => {
    return (
        <div className='font-sans'>
            <AosInitializer></AosInitializer>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;