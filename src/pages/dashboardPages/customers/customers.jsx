import React, { useState, useEffect } from "react";
import DashboardHOC from "../dashboardHOC";
import ReactDataTable from "../../../components/data_table/dataTable";
import { getCustomers } from "../../../api/api";
import { Spinner } from "react-bootstrap";

function Customers() {
  useEffect(() => {
    getUserCustomers();
  }, []);
  const [showSpinner, setshowSpinner] = useState(true);
  const [customerData, setcustomerData] = useState([]);

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

  return (
    <div>
      {showSpinner ? (
        <div className="spinner-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        ""
      )}
      <ReactDataTable data={customerData} title="Customers"></ReactDataTable>
    </div>
  );
}

export default DashboardHOC(Customers);
