import React, { useState, useEffect } from "react";
import DashboardHOC from "../dashboardHOC";
import ReactDataTable from "../../../components/data_table/dataTable";
import { getCustomers, addCustomer } from "../../../api/api";
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

  const addNewCustomer = (data) => {
    const { name, description, companyName, location } = data;
    addCustomer({
      name,
      description,
      companyName,
      location,
    });
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
        onAdd={() =>
          history.push({
            pathname: "/dashboard",
          })
        }
      ></ReactDataTable>
    </div>
  );
}

export default DashboardHOC(Customers);
