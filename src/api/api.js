import { environment } from "../environments/environment";
import Axios from "axios";
const userData = JSON.parse(localStorage.getItem("userData"));
const { token, uuid } = userData;


export const LoginApi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/login`, { data });
};

export const SignupAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/signup`, { data });
};

export const GetProfileDetails = () => {
  console.log(userData);
  return Axios.get(`${environment.BaseURL}/users/${uuid}/getProfile`, {
    headers: { "Authorization": `${token}` },
  });
};

export const EditProfileDetails = (data) => {
  return Axios.post(`${environment.BaseURL}/users/${uuid}/editProfile`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const ChangeUserPassword = (data) => {
  return Axios.post(`${environment.BaseURL}/users/${uuid}/changePassword`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const AddBankAccountAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/addCard`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const getAccounts = () => {
  return Axios.get(`${environment.BaseURL}/accounts/users/${uuid}/getAccounts`, {
    headers: { "Authorization": `${token}` },
  });
};

export const deleteAccounts = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/deleteAccounts`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const EditBankAccountAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/accounts/editAccounts`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};


export const addCustomers = (data) => {
  return Axios.post(`${environment.BaseURL}/customers/addCustomer`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};
export const getCustomers = () => {
  return Axios.get(`${environment.BaseURL}/customers/getCustomers`,
    { params: { uuid } },
    {
      headers: { "Authorization": `${token}` },
    }
  );
};

