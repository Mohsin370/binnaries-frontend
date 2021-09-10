import { environment } from "../environments/environment";
import Axios from "axios";

export const LoginApi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/login`, { data });
};

export const SignupAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/signup`, { data });
};

export const GetProfileDetails = (data) => {
  return Axios.post(`${environment.BaseURL}/users/getProfile`, { data });
};

export const EditProfileDetails = (data) => {
  return Axios.post(`${environment.BaseURL}/users/editProfile`, { data });
};

export const ChangeUserPassword = (data) => {
  return Axios.post(`${environment.BaseURL}/users/changePassword`, { data });
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


export const addCustomers = (data) => {
  return Axios.post(`${environment.BaseURL}/customers/addCustomer`, { data });
};
export const getCustomers = (data) => {
  return Axios.get(`${environment.BaseURL}/customers/getCustomers`,
    { params: { token: data.token, uuid: data.uuid }, }
  );
};

