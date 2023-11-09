import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TecSidebar from './TecSidebar';
import Content from './Content';
import "../../Styles/Footer.css";

function TecnoPage() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <TecSidebar />
                    <Content />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TecnoPage;
