import React from 'react';
import Header from '../Sections/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Footer/Footer';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;