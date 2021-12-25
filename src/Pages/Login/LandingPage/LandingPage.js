import React from 'react';
import About from '../../About/About';
import Footer from '../../Footer/Footer';
import LandingHeader from '../LandingHeader/LandingHeader';
import Login from '../Login/Login';

const LandingPage = () => {
    return (
        <div>
            <LandingHeader></LandingHeader>
            <Login></Login>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;