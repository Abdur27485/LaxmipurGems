import React from 'react';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div data-theme="light">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;