import React from 'react';
// import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Ano from '../components/Shared/Ano';
import Header from '../components/Shared/Header/Header';

const Main = () => {
    return (
        <div className='font-sans'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;