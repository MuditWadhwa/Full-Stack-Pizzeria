import {applyMiddleware,combineReducers,createStore} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { addPizzaReducer, getAllPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer } from './reducers/pizzaReducer';
import { registerUserReducer,loginUserReducer,getAllUsersReducer } from './reducers/userReducer';
import { placeOrderReducer,getUserOrdersReducer,allUserOrdersReducer } from './reducers/orderReducer';
const rootReducer=combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
     loginUserReducer:loginUserReducer,
     placeOrderReducer:placeOrderReducer,
     getUserOrdersReducer:getUserOrdersReducer,
     addPizzaReducer:addPizzaReducer,
     getPizzaByIdReducer:getPizzaByIdReducer,
     updatePizzaByIdReducer:updatePizzaByIdReducer,
     allUserOrdersReducer:allUserOrdersReducer,
     getAllUsersReducer:getAllUsersReducer
})
const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];
const currentUser=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem('currentUser')):null;

const initialState={
  cartReducer:{
    cartItems:cartItems
  },
    loginUserReducer:{
      currentUser:currentUser   
    }
}

const middleware=[thunk];

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;