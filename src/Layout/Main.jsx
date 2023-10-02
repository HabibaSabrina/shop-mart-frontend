import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;