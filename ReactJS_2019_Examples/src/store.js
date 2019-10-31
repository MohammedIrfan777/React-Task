import {createStore,combineReducers} from 'redux';
import showReducer from './reducers/showReducer';
import userReducer from './reducers/userReducer';

export default createStore(
    combineReducers({
        showReducer,userReducer
    })
);