import React, { useState, useEffect } from "react";
import DashboardHOC from "../dashboardHOC";
import ReactDataTable from "../../../components/data_table/dataTable";
import { getProducts, deleteProductApi } from "../../../api/api";
import { Spinner, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function Orders() {
  useEffect(() => {
    getUserProducts();
  }, []);
  const [showSpinner, setshowSpinner] = useState(true);
  const [productData, setproductData] = useState([]);
  const history = useHistory();

  const getUserProducts = () => {
    getProducts()
      .then((res) => {
        if (res.data.message === "success") {
          setproductData(res.data.products);
          setshowSpinner(false);
        } else {
          setshowSpinner(false);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const addProductsRoute = () => {
    history.push({
      pathname: "/dashboard/orders/add",
    });
  };
  const editProductsRoute = (row) => {
    history.push({
      pathname: `/dashboard/orders/${row.id}/edit`,
    });
  };
  const deleteProducts = (row) => {
    deleteProductApi(row.id).then((res) => {
      getUserProducts();
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
          <Button className="mr-2" onClick={() => editProductsRoute(row)}>
            Edit
          </Button>
        )}
        {actions.delete && (
          <Button onClick={() => deleteProducts(row)}>Delete</Button>
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
      name: "Description",
      selector: "description",
      sortable: true,
      filterable: true,
    },
    
    {
      name: "Brand",
      selector: "brand",
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
        data={productData}
        title="Products"
        actions={actions}
        onAdd={addProductsRoute}
        columns={columns}
      ></ReactDataTable>
    </div>
  );
}

export default DashboardHOC(Orders);
