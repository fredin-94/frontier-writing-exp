import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const TopOfPage = ()=>{
    return(
        <div className="top-of-page">
            <Logo/>
            <Navbar/>
        </div>
    );
}

export default TopOfPage;