import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { ChangeUserPassword } from "../../../api/api";
import Toasts from "../../../components/toast_message/Toast";

export default function ChangePassword() {
  const [showSpinner, setshowSpinner] = useState(false);
  const [showToast, setshowToast] = useState(false);
  const [toastMessage, settoastMessage] = useState({ header: "", body: "" });

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validation = (values) => {
    const { currentPassword, newPassword, confirmPassword } = values;
    const errors = {};
    if (!currentPassword) {
      errors.currentPassword = "Required";
    }
    if (!newPassword) {
      errors.newPassword = "Required";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Required";
    }
    if (confirmPassword !== newPassword) {
      errors.confirmPassword = "New Password does not match";
    }
    return errors;
  };

  const onHandleSubmit = (values) => {
    setshowSpinner(true);
    ChangeUserPassword(values)
      .then((res) => {
        setshowSpinner(false);
        if (res.data.message === "success") {

          setshowToast(true);
          settoastMessage({header:"Success!", body:"Password Changed successfully"})
          //display success message
        }else{
        setshowToast(true);
        settoastMessage({header:"Error!", body:"Old password is not correct"})
        }
      })
      .catch((err) => {
        setshowSpinner(false);
        setshowToast(true);
        settoastMessage({header:"Error!", body:"Something went wrong"})
      });
  };

  return (
    <Row>
        <Toasts
          toggleToast={ () => setshowToast(!showToast)}
          showToast={showToast}
          header={toastMessage.header}
          body={toastMessage.body}
        />
      <h4 className="mb-5"> Change Password</h4>
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={onHandleSubmit}
      >
        <Form>
          <Row>
            <Col sm="9" className="m-auto pt-3">
              <label className="d-block">Current Password</label>
              <Field
                type="password"
                name="currentPassword"
                className="form-control"
              />
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
              <label className="d-block">Confirm Password</label>
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
              Change Password
              {showSpinner && (
              <Spinner
                animation="border"
                variant="light"
                size="sm"
                className="mb-1 ml-2"
              />
            )}
            </Button>
          </div>
        </Form>
      </Formik>
    </Row>
  );
}
