import React from 'react';
import './stylayout.css';

import Header from './Header';
import Footer from './footer';
const Layout = (props) => {
    
    return (
        <>
            <Header />
            <section className="layout">
                {props.children}
            </section>
            <Footer/>
        </>
    );

};

export default Layout;