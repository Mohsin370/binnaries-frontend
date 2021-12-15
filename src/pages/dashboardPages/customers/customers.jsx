import React, { useState, useEffect } from "react";
import DashboardHOC from "../dashboardHOC";
import ReactDataTable from "../../../components/data_table/dataTable";
import { getCustomers, addCustomer, deleteCustomerApi } from "../../../api/api";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

function Customers() {
  useEffect(() => {
    getUserCustomers();
  }, []);
  const [showSpinner, setshowSpinner] = useState(true);
  const [customerData, setcustomerData] = useState([]);
  const history = useHistory();

  const getUserCustomers = () => {
    getCustomers()
      .then((res) => {
        if (res.data.message === "success") {
          setcustomerData(res.data.customers);
          setshowSpinner(false);
        } else {
          setshowSpinner(false);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const addCustomerRoute = () => {
    history.push({
      pathname: "/dashboard",
    })
  };
  const editCustomerRoute = () => {
    history.push({
      pathname: "/dashboard",
    })
  };
  const deleteCustomer = (row) => {
    console.log(row);
    deleteCustomerApi(row.id).then((res)=>{
      getUserCustomers();
    })
  };

  const actions = {
    add: true,
    edit: true,
    delete: true,
  };

  return (
    <div>
      {showSpinner ? (
        <div className="spinner-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        ""
      )}
      <ReactDataTable
        data={customerData}
        title="Customers"
        actions={actions}
        onAdd={addCustomerRoute}
        onEdit={editCustomerRoute}
        onDelete={deleteCustomer}
      ></ReactDataTable>
    </div>
  );
}

export default DashboardHOC(Customers);
