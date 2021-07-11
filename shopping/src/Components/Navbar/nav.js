import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

// import {BsFillBagFill} from "react-icons/bs"
import './style.css';
import  Logo  from './Ima/Logo 1.png';


function Nav() {
    const {totalQuantity} = useSelector(state => state.CartReducer)
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/"><img src={Logo} alt="Logo" className="logo"/></Link>
                       
                    </div>

                    <div className="nav-right">
                        <Link to="/Cart">
                            <div className="basket">
                                <h5 className="cart-icon">
                                    Icon
                                </h5>
                                <span>
                                    {totalQuantity}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}





export default Nav;