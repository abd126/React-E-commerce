import React , {useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSeletor , useDispatch, useSelector} from 'react-redux';
import './style.css';







function Details() {
    const[quantity , setQuantity] = useState(1);
    const {id} = useParams();
    const {product} = useSelector(state => state.Products);
     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:'PRODUCT',id})
    },[id]);
    const decQuantity = ()=>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6  mt-100">
                    <div className="details-img">
                        <img src={`/images/${product.image}`} alt=""/>
                    </div>
                </div>
                <div className="col-6 mt-100">
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.Desc}</h4>

                    <div className="details">
                        <button className="dec" onClick={decQuantity}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="inc" onClick={()=> setQuantity(quantity+1)}>+</button>
                        <button onClick={()=> dispatch({type:"ADDTOCART" , payload:{product ,quantity}})}>
                            Add To Cart
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Details;
