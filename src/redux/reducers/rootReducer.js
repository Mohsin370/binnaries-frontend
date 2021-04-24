import {combineReducers} from 'redux';
import {loginReducer, signUpReducer} from './userReducer';


export default combineReducers({
    loginReducer:loginReducer,
    signUpReducer:signUpReducer
})