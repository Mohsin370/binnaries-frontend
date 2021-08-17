import {combineReducers} from 'redux';
import {AuthReducer, signUpReducer} from './userReducer';


export default combineReducers({
    AuthReducer,
    signUpReducer:signUpReducer,
})