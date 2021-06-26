import { environment } from "../environments/environment";
import Axios from "axios";

export const LoginApi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/login`, { data });
};

export const SignupAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/signup`, { data });
};

export const AddBankAccountAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/addCard`, { data });
};

export const getAccounts = (token) => {
  return Axios.get(`${environment.BaseURL}/accounts/getAccounts`, {
    params: { token },
  });
};

export const deleteAccounts = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/deleteAccounts`, { data });
};

export const EditBankAccountAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/editAccounts`, { data });
};
