import React from 'react';
import './Header.css';
import Nav from '../Navbar/nav'
import Banner from './Header Img/Banner.jpg'





function Header() {
    return (
        <div className="header">

            
                <Nav />
                <img src={Banner} />
        
        </div>

    )
}





export default Header;