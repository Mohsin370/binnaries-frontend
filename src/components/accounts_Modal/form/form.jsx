import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import { AddBankAccountAPi, EditBankAccountAPi } from "../../../api/api";

export default function FormComponent(props) {
  const submitAccount = useRef();
  const addCardDetails = (formData) => {
    submitAccount.current.disabled = true;
    AddBankAccountAPi(formData)
      .then((res) => {
        if (res.data.message === "success") {
          props.closeModal();
          props.updateData();
        } else {
          submitAccount.current.disabled = false;
        }
      })
      .catch((err) => {
        console.log({ err });
        submitAccount.current.disabled = false;
      });
  };

  const editCardDetails = (formData, actions) => {
    submitAccount.current.disabled = true;
    formData.id = props.data.id;
    EditBankAccountAPi(formData)
      .then((res) => {
        if (res.data.message === "success") {
          props.closeModal();
          props.updateData();
        } else {
          submitAccount.current.disabled = false;
        }
      })
      .catch((err) => {
        submitAccount.current.disabled = false;
        console.log({ err });
      });
  };

  const validation = (values) => {
    const { bankName, accTitle, accNo, cardNo } = values;
    const errors = {};
    if (!bankName) {
      errors.bankName = "Required";
    } else if (!/^[a-zA-Z ]+$/.test(bankName)) {
      errors.bankName = "Only alphabets allowed";
    }
    if (!accTitle) {
      errors.accTitle = "Required";
    } else if (!/^[a-zA-Z ]+$/.test(accTitle)) {
      errors.accTitle = "Only alphabets allowed";
    }
    if (!accNo) {
      errors.accNo = "Required";
    } else if (!/^[0-9]*$/.test(accNo)) {
      errors.accNo = "Only numbers allowed";
    }

    if (!cardNo) {
      errors.cardNo = "Required";
    } else if (!/^[0-9]*$/.test(cardNo)) {
      errors.cardNo = "Only numbers allowed";
    } else if (cardNo.length !== 16) {
      errors.cardNo = "16 digits required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        bankName: props.data.bank_name,
        cardNo: props.data.card_no,
        accTitle: props.data.acc_title,
        accNo: props.data.acc_no,
      }}
      validate={validation}
      onSubmit={props.data ? editCardDetails : addCardDetails}
    >
      <Form>
        <div className="row m-auto">
          <div className="col-md-6">
            <label className="d-block">Bank Name *</label>
            <Field name="bankName" className="form-control" />
            <ErrorMessage
              name="bankName"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="col-md-6">
            <label className="d-block">Card No*</label>
            <Field name="cardNo" className="form-control" />
            <ErrorMessage
              name="cardNo"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="col-md-6 mt-4">
            <label className="d-block">Account Title*</label>
            <Field name="accTitle" className="form-control" />
            <ErrorMessage
              name="accTitle"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="col-md-6 mt-4">
            <label className="d-block">Account No*</label>
            <Field name="accNo" className="form-control" />
            <ErrorMessage
              name="accNo"
              component="div"
              className="text-danger"
            />
          </div>
        </div>
        <div className="m-auto text-center">
          <Button
            className="w-25 mt-2 float-right m-4 mt-5"
            type="submit"
            ref={submitAccount}
          >
            {props.data ? "Update Details" : "Save Details"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
