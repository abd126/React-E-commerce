import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from '../../Components/Navbar/nav';
import Home from '../../Components/Home/Home';
import Cart from '../../Components/Cart/Cart';
import Details from '../../Components/Details/Details';
import Signup from '../../Components/Forms/Signup';
import Login from '../../Components/Forms/Login'

function AppRouter() {
    return (
        <div>
            <Router>
                <Route path = "/Signup" exact component={Signup}/>
                <Route path = "/Login" exact component={Login} />
                
                <Route path="/" exact component={Home} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/details/:id" exact component={Details} />
                

            </Router>
        </div>
    )
}

export default AppRouter
