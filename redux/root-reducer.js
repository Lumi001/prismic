import {combineReducers} from 'redux';
import appReducer from './app/app.reducers';
import navbarReducer from './navbar/navbar.reducers';


const rootReducer = combineReducers({app:appReducer,navbar:navbarReducer})

export default rootReducer;