import React from 'react';
import { connect } from 'react-redux';
import Nav from './Components/Navbar/nav';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/details/:id" exact component={Details} />
    </Router>

  )
}





// const mapStateToProps = (state) => ({
//   Product: state.Product,

// })

// const mapDispatchToProps = (dispatch) => ({

// })


export default connect(null, null)(App);