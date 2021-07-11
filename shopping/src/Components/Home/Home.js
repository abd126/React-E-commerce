import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import Header from '../Header/Header'

const Home = () => {
    const {products} = useSelector(state => state.Products);
  
    return (
        
       <div>
           <Header />
            <div className="container">
            <div className="row">
                {products.map(product =>(
                 <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={product.id}>
                     <div className="product">
                         <div className="product-img">
                             <Link to={`/details/${product.id}`}>
                             <img src={`/images/${product.image}`} alt={product.name}  />
                             </Link>
                         </div>
                         <div className="product-name">
                             {product.name}
                         </div>
                         <div className="row">
                             <div className="col-6">
                                <div className="product-price">
                                {product.price}
                                </div>
                               
                             </div>

                         </div>
                     </div>
                 </div>   
                ))}
            </div>
        </div>


       </div>
    )
}




export default connect(null, null)(Home);


