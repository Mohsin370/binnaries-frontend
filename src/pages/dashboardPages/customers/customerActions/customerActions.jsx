import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import { addCustomerApi, getCustomerByIdApi, editCustomerApi } from "../../../../api/api";
import DashboardHOC from "../../dashboardHOC";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const CustomerActions = () => {
  const params = useParams();
  const history = useHistory();


  useEffect(() => {
    if (params.customer_id) {
      getCustomerDetails();
    }
  }, []);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    location: "",
    companyName: "",
    description: "",
    type: "CUSTOMER",
  });
  const validation = (values) => {
    const { name, location, companyName, description, type } = values;
    const errors = {};
    if (!name) {
      errors.name = 'Required'
    }
    if (!location) {
      errors.location = 'Required';
    }
    if (!companyName) {
      errors.companyName = 'Required';
    }
    if (!description) {
      errors.description = 'Required';
    }
    if (!type) {
      errors.type = 'Required';
    }

    return errors;
  }


  const getCustomerDetails = () => {
    getCustomerByIdApi(params.customer_id).then((res) => {
      if (res.status === 200) {
        setCustomerDetails(res.data.customer);
      }
    });
  };
  const createCustomer = (customer) => {
    addCustomerApi(customer).then((res) => {
      if(res.status === 200){
        history.push({
          pathname: `/dashboard/customers/`,
        });
      }
     });
  };
  const editCustomer = (customer) => {
    editCustomerApi(customer).then((res) => {
      if(res.status === 200){
        history.push({
          pathname: `/dashboard/customers/`,
        });
      }
     });
  };
  return (
    <Row>
      <Formik
        initialValues={customerDetails}
        onSubmit={params.customer_id?editCustomer:createCustomer}
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
              <Field name="companyName" placeholder="Company Name"></Field>
              <ErrorMessage name="companyName" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Col>
              <Field name="location" placeholder="Location"></Field>
              <ErrorMessage name="location" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Col>
              <Field name="description" placeholder="Description"></Field>
              <ErrorMessage name="description" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Col>
              <Field as="select" name="type">
                <option value="CUSTOMER">Customer</option>
                <option value="SELLER">Seller</option>
              </Field>
              <ErrorMessage name="type" component="div" className="text-danger"></ErrorMessage>
            </Col>
            <Button type="submit">{params.customer_id?'Edit':'Submit'}</Button>
          </Row>
        </Form>
      </Formik>
    </Row>
  );
};

export default DashboardHOC(CustomerActions);
