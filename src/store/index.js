import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';


const AllReducers = combineReducers({person: personReducer,game: gameReducer , user: userReducer})

const InitialState = {
    game: { name: 'game' },
    person: { name: 'Debajit', email: 'debajit@collegify.com' },
    user: []
}

const middleWare = [thunk];


const store = createStore(AllReducers , InitialState, compose(applyMiddleware(...middleWare) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//use apply middleWare thunk for async function in dispatcher from front end request.
// thunk middleware will take care of functional actions.

export default store;
