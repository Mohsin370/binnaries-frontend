import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import { addCustomerApi, getCustomerByIdApi } from "../../../../api/api";
import DashboardHOC from "../../dashboardHOC";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CustomerActions = () => {
  const params = useParams();

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
  });

  const getCustomerDetails = () => {
    getCustomerByIdApi(params.customer_id).then((res) => {
      if (res.status === 200) {
        setCustomerDetails(res.data.customer);
      }
    });
  };
  const createCustomer = (customer) => {
    addCustomerApi(customer).then((res) => {});
  };
  return (
    <Row>
      <Formik
        initialValues={customerDetails}
        onSubmit={createCustomer}
        enableReinitialize={true}
      >
        <Form>
          <Row className="m-auto">
            <Col>
              <Field name="name" placeholder="Name"></Field>
              <ErrorMessage name="name"></ErrorMessage>
            </Col>
            <Col>
              <Field name="companyName" placeholder="Company Name"></Field>
              <ErrorMessage name="companyName"></ErrorMessage>
            </Col>
            <Col>
              <Field name="location" placeholder="Location"></Field>
              <ErrorMessage name="location"></ErrorMessage>
            </Col>
            <Col>
              <Field name="description" placeholder="Description"></Field>
              <ErrorMessage name="description"></ErrorMessage>
            </Col>
            <Button type="submit">submit</Button>
          </Row>
        </Form>
      </Formik>
    </Row>
  );
};

export default DashboardHOC(CustomerActions);
