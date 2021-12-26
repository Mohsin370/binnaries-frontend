import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import { addProductApi, getProductByIdApi, editProductApi } from "../../../../api/api";
import DashboardHOC from "../../dashboardHOC";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const OrderActions = () => {
  const params = useParams();
  const history = useHistory();


  useEffect(() => {
    if (params.product_id) {
      getProductDetails();
    }
  }, []);
  const [productDetails, setProductDetails] = useState({
    name: "",
    brand: "",
    description: "",
  });
  const validation = (values) => {
    const { name, brand, description } = values;
    const errors = {};
    if (!name) {
      errors.name = 'Required'
    }
    if (!brand) {
      errors.brand = 'Required';
    }
    if (!description) {
      errors.description = 'Required';
    }

    return errors;
  }


  const getProductDetails = () => {
    getProductByIdApi(params.product_id).then((res) => {
      if (res.status === 200) {
        setProductDetails(res.data.product);
      }
    });
  };
  const createProduct = (product) => {
    addProductApi(product).then((res) => {
      if(res.status === 200){
        history.push({
          pathname: `/dashboard/orders/`,
        });
      }
     });
  };
  const editProduct = (product) => {
    editProductApi(product).then((res) => {
      if(res.status === 200){
        history.push({
          pathname: `/dashboard/orders/`,
        });
      }
     });
  };
  return (
    <Row>
      <Formik
        initialValues={productDetails}
        onSubmit={params.product_id?editProduct:createProduct}
        enableReinitialize={true}
        validate={validation}
      >
        <Form>
          <Row className="m-auto">
            <Col>
              <Field name="name" placeholder="Name"></Field>
              <ErrorMessage name="name" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Col>
              <Field name="description" placeholder="Description"></Field>
              <ErrorMessage name="description" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Col>
              <Field name="brand" placeholder="Brand"></Field>
              <ErrorMessage name="brand" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Button type="submit">{params.product_id?'Edit':'Submit'}</Button>
          </Row>
        </Form>
      </Formik>
    </Row>
  );
};

export default DashboardHOC(OrderActions);
