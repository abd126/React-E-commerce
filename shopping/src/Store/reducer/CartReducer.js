const INIT_STATE = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
}
const CartReducer = (state = INIT_STATE, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADDTOCART':
            const { product, quantity } = action.payload;
            const check = state.products.find(prd => prd.id === product.id);
            if (check) {
                return state;
            }
            else {
                const tprice = state.totalPrice + product.price * quantity;
                const tQuantity = state.totalQuantity + quantity;
                product.quantity = quantity
                return {
                    ...state, products: [...state.products, product],
                    totalPrice: tprice,
                    totalQuantity: tQuantity,
                }
            }
         case 'INC':
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.price,
                totalQuantity: state.totalQuantity + 1
            }
         case 'DEC':
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.price, 
                    totalQuantity: state.totalQuantity - 1
                }
            } else {
                return state;
            }

         case 'REMOVE':
            findPro = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload);
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity, 
                totalQuantity: state.totalQuantity - findPro.quantity
            }

        default: return state;
    }
}


export default CartReducer;