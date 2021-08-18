import {combineReducers} from 'redux';
import {AuthReducer, signUpReducer, updateUserReducer} from './userReducer';


export default combineReducers({
    AuthReducer,
    signUpReducer,
    updateUserReducer,
})