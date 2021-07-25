import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./changePassword.module.css";

export default function ChangePassword() {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validation = (values) => {
    const { currentPassword, newPassword, confirmPassword } = values;
    const errors = {};
    if (!currentPassword) {
      errors.name = "Required";
    }
    if (!newPassword) {
      errors.name = "Required";
    }
    if (!confirmPassword) {
      errors.name = "Required";
    }
    return errors;
  };

  return (
    <Row>
      <h4  className="mb-5"> Change Password</h4>
      <Formik initialValues={initialValues} validate={validation}>
        <Form>
          <Row>
            <Col sm="9" className="m-auto pt-3">
              <label className="d-block">Current Password</label>
              <Field  type="password" name="password" className="form-control" />
              <ErrorMessage
                name="currentPassword"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col sm="9" className="m-auto pt-3">
              <label className="d-block">New Password</label>
              <Field
                type="password"
                name="newPassword"
                className="form-control"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col sm="9" className="m-auto pt-3">
              <label className="d-block">confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>
          <div className="text-center">
            <Button className="mt-5" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </Row>
  );
}
