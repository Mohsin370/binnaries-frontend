import {environment} from '../environments/environment';
import Axios from 'axios';


export const LoginApi = (data) => {
    return Axios.post(`${environment.BaseURL}/users/login`, { data });
  };

export const SignupAPi = (data) => {
    return Axios.post(`${environment.BaseURL}/users/signup`, { data });
  };

