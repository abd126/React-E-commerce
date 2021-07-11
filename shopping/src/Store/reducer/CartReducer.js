const INIT_STATE = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
}
const CartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case'ADDTOCART':
        const {product , quantity} = action.payload;
        const check = state.products.find(prd => prd.id === product.id); 
        if(check){
            return state;
        }
        else{
            const tprice = state.totalPrice + product.price * quantity;
            const tQuantity = state.totalQuantity + quantity;
            product.quantity = quantity
            return{
                ...state , products:[...state.products,product],
                totalPrice:tprice,
                totalQuantity:tQuantity,
            }
        }

        default: return state;
    }
}


export default CartReducer;