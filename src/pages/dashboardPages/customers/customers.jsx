import React, { useState, useEffect } from "react";
import DashboardHOC from "../dashboardHOC";
import ReactDataTable from "../../../components/data_table/dataTable";
import { getCustomers, deleteCustomerApi } from "../../../api/api";
import { Spinner, Button } from "react-bootstrap";
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
      pathname: "/dashboard/customers/add",
    });
  };
  const editCustomerRoute = (row) => {
    history.push({
      pathname: `/dashboard/customers/${row.id}/edit`,
    });
  };
  const deleteCustomer = (row) => {
    deleteCustomerApi(row.id).then((res) => {
      getUserCustomers();
    });
  };

  const actions = {
    add: true,
    edit: true,
    delete: true,
  };

  const ActionButtons = (row) => {
    return (
      <div className="d-flex">
        {actions.edit && (
          <Button className="mr-2" onClick={() => editCustomerRoute(row)}>
            Edit
          </Button>
        )}
        {actions.delete && (
          <Button onClick={() => deleteCustomer(row)}>Delete</Button>
        )}
      </div>
    );
  };

  const columns = [
    {
      name: "Actions",
      cell: (row) => ActionButtons(row),
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      filterable: true,
    },
    {
      name: "Company Name",
      selector: "companyName",
      sortable: true,
      filterable: true,
    },
    {
      name: "Location",
      selector: "location",
      sortable: true,
      filterable: true,
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
      filterable: true,
    },
    
    {
      name: "type",
      selector: "type",
      sortable: true,
      filterable: true,
    },
    {
      name: "Created at",
      selector: "createdAt",
      sortable: true,
    },
  ];

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
        columns={columns}
      ></ReactDataTable>
    </div>
  );
}

export default DashboardHOC(Customers);
