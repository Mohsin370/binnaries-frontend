import {combineReducers} from 'redux';
import {loginReducer, signUpReducer, LogoutReducer} from './userReducer';


export default combineReducers({
    loginReducer:loginReducer,
    signUpReducer:signUpReducer,
    LogoutReducer,
})