import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';


function Cart() {

    const { products } = useSelector(state => state.CartReducer);

    return (
        <div className="cart">
            <div className="container-fluid">
                <h3>Your Shopping Cart</h3>
                {products.length > 0 ? <>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart-heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">Inc/Dec</div>
                                    <div className="col-2">Total Price</div>
                                    <div className="col-2">Remove</div>
                                </div>
                            </div>

                        </div>


                        {products.map(product => (
                            <div className="row" key={product.id}>
                                <div className="">
                                    <div className="row">
                                    <div className="col-2">
                                        <div className="cart-img">
                                            <img src={`/images/${product.image}`} />
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="cart-name">
                                            {product.name}
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="cart-price">
                                            {product.price}
                                        </div>

                                    </div>

                                    <div className="col-2">
                                        <div className="inc-dec">
                                            <button className="dec">-</button>
                                            <span className="quantity">{product.quantity}</span>
                                            <button className="inc">+</button>

                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="cart-TotalPrice">
                                            {product.price * product.quantity}
                                        </div>

                                    </div>

                                    <div className="col-2">
                                        <div className="cart-remove">
                                            Remove
                                    </div>

                                    </div>
                                    </div>
                                </div>
                                



                            </div>
                        ))}


                        <div className="col-3">Summry</div>


                    </div>
                </> : 'Your Shopping Cart is Empty'}

            </div>
        </div>
    )
}

export default Cart
