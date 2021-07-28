import React from 'react';
import './style.css';
import Nav from '../Navbar/nav'
import { useSelector, useDispatch } from 'react-redux';
import { BsReverseBackspaceReverse ,BsDash, BsPlus } from "react-icons/bs";



function Cart() {

    const { products, totalPrice, totalQuantity } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <Nav />
            <div className="container">
                <h3>Your cart</h3>
                {products.length > 0 ? <>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart__heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">Inc/Dec</div>
                                    <div className="col-2">Total Price</div>
                                    <div className="col-2">Remove</div>
                                </div>
                            </div>
                            {products.map(product => (
                                <div className="row verticalAlign" key={product.id}>
                                    <div className="col-2">
                                        <div className="cart__image">
                                            <img src={`/images/${product.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__name">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        {product.price}
                                    </div>
                                    <div className="col-2">
                                        <div className="details__info cart__incDec">
                                            <div className="details__incDec">
                                                <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}>
                                                    <BsDash />
                                                    </span>
                                                <span className="quantity">{product.quantity}</span>
                                                <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })}>
                                                    <BsPlus />
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__total text-center">
                                            {product.price * product.quantity}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__remove" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                            <BsReverseBackspaceReverse />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary__heading">
                                    Summary
                                </div>
                                <div className="summary__details">
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Items:
                                        </div>
                                        <div className="col-6">{totalQuantity}</div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Price
                                        </div>
                                        <div className="col-6">
                                            {totalPrice}
                                        </div>

                                    </div>
                                    <button type="button" className="checkout">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : 'Your cart is empty!'}
            </div>
        </div>

    )
}

export default Cart
