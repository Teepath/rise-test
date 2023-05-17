import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RegisterUser from './reducers/auth';
import SignUser from './reducers/signin'
import Plans from './reducers/plans';

const middleware = [thunk];

const reducer = combineReducers({
    register: RegisterUser,
    login:SignUser,
    investment:Plans
   
   })

// const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);


export default store;