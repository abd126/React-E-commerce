import Products from './reducer/Products';
import CartReducer from './reducer/CartReducer';
import { createStore , applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
const root = combineReducers({
    Products,
    CartReducer
})

const store = createStore(root , applyMiddleware(thunk))


export default store;