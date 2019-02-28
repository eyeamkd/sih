import React, { Component } from 'react';

import Header from "../components/LandingPage/Header.jsx";
import Main from "../components/LandingPage/Main.jsx";
import Footer from "../components/LandingPage/Footer.jsx";

class LandingPage extends React.Component {
    render() {
        return (
        <div className="container">
            <Header /> 
            <Main/>
            <Footer /> 
        </div>
        );
    }
}

export default LandingPage;
