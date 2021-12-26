import { environment } from "../environments/environment";
import Axios from "axios";

const getUserInfo = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData;
}


export const LoginApi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/login`, { data });
};

export const SignupAPi = (data) => {
  return Axios.post(`${environment.BaseURL}/users/signup`, { data });
};

export const GetProfileDetails = () => {
  const { uuid, token } = getUserInfo();
  return Axios.get(`${environment.BaseURL}/users/${uuid}/getProfile`, {
    headers: { "Authorization": `${token}` },
  });
};

export const EditProfileDetails = (data) => {
  const { uuid, token } = getUserInfo();
  return Axios.post(`${environment.BaseURL}/users/${uuid}/editProfile`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const ChangeUserPassword = (data) => {
  const { uuid, token } = getUserInfo();
  return Axios.post(`${environment.BaseURL}/users/${uuid}/changePassword`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const AddBankAccountAPi = (data) => {
  const { uuid, token } = getUserInfo();
  data.uuid = uuid;
  return Axios.post(`${environment.BaseURL}/accounts/addCard`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const getAccounts = () => {
  const { uuid, token } = getUserInfo();
  return Axios.get(`${environment.BaseURL}/accounts/users/${uuid}/getAccounts`, {
    headers: { "Authorization": `${token}` },
  });
};

export const deleteAccounts = (data) => {
  const { token } = getUserInfo();
  return Axios.post(`${environment.BaseURL}/accounts/${data.id}/deleteAccounts`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};

export const EditBankAccountAPi = (data) => {
  const { token } = getUserInfo();
  return Axios.put(`${environment.BaseURL}/accounts/${data.id}/editAccounts`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};


export const addCustomerApi = (data) => {
  const { uuid, token } = getUserInfo();
  data.user_id = uuid;
  return Axios.post(`${environment.BaseURL}/customers/addCustomer`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};
export const editCustomerApi = (data) => {
  const { token } = getUserInfo();
  return Axios.put(`${environment.BaseURL}/customers/${data.id}/editCustomer`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};
export const getCustomers = () => {
  const { uuid, token } = getUserInfo();
  return Axios.get(`${environment.BaseURL}/customers/users/${uuid}/getCustomers`,
    {
      headers: { "Authorization": `${token}` },
    }
  );
};
export const deleteCustomerApi = (customer_id) => {
  const { token } = getUserInfo();
  return Axios.post(`${environment.BaseURL}/customers/deleteCustomer`,{customer_id}, {
    headers: { "Authorization": `${token}` },
  });
};
export const getCustomerByIdApi = (customer_id) => {
  const { token } = getUserInfo();
  return Axios.get(`${environment.BaseURL}/customers/${customer_id}/getCustomerById`, {
    headers: { "Authorization": `${token}` },
  });
};


export const addProductApi = (data) => {
  const { uuid, token } = getUserInfo();
  data.user_id = uuid;
  return Axios.post(`${environment.BaseURL}/products/addProduct`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};
export const editProductApi = (data) => {
  const { token } = getUserInfo();
  return Axios.put(`${environment.BaseURL}/products/${data.id}/editProduct`, { data }, {
    headers: { "Authorization": `${token}` },
  });
};
export const getProducts = () => {
  const { uuid, token } = getUserInfo();
  return Axios.get(`${environment.BaseURL}/products/users/${uuid}/getProducts`,
    {
      headers: { "Authorization": `${token}` },
    }
  );
};
export const deleteProductApi = (product_id) => {
  const { token } = getUserInfo();
  return Axios.post(`${environment.BaseURL}/products/deleteProduct`,{product_id}, {
    headers: { "Authorization": `${token}` },
  });
};
export const getProductByIdApi = (product_id) => {
  const { token } = getUserInfo();
  return Axios.get(`${environment.BaseURL}/products/${product_id}/getProductById`, {
    headers: { "Authorization": `${token}` },
  });
};


