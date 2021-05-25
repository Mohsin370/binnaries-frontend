import { environment } from '../environments/environment';
import Axios from 'axios';


export const LoginApi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/login`, { data });
};

export const SignupAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/signup`, { data });
};

export const AddBankAccountAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/addCard`, { data });
};

export const getAccounts = () => {
  return Axios.get(`${environment.BaseURL}/accounts/getAccounts`);
};