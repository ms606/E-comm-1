import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import Cookie from 'js-cookie';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON("userInfo") || null;

console.log({cartItems});

const initialState = {cart: {cartItems}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;