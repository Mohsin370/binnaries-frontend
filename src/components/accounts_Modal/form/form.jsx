import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import {AddBankAccountAPi} from '../../../api/api'

export default function form(props) {

    const addCardDetails = (formData) => {
        formData.token = localStorage.getItem('token');
        console.log(formData)
        AddBankAccountAPi(formData).then((res) => {
            if (res.data.message === "success") {
                props.closeModal();
            } else if (res.data.message === "exists") {
                console.log("user already exists")
            }

        }).catch((err) => {
            console.log({ err })
        })
    }


    const validation = (values) => {
        const { bankName, accTitle, accNo,cardNo } = values;
        const errors = {};
        if (!bankName) {
            errors.bankName = 'Required';
        } else if (!/^[a-zA-Z ]+$/.test(bankName)) {
            errors.bankName = 'Only alphabets allowed';
        }
        if (!accTitle) {
            errors.accTitle = 'Required';
        } else if (!/^[a-zA-Z ]+$/.test(accTitle)) {
            errors.accTitle = 'Only alphabets allowed';
        }
        if (!accNo) {
            errors.accNo = 'Required';
        } else if (!/^[0-9]*$/.test(accNo)) {
            errors.accNo = 'Only numbers allowed';
        }
        
        if (!cardNo) {
            errors.cardNo = 'Required';
        } else if (!/^[0-9]*$/.test(cardNo)) {
            errors.cardNo = 'Only numbers allowed';
        }else if (cardNo.length !== 12) {
            errors.cardNo = '12 digits required';
        }
        return errors;

    }


    return (
        <Formik
            initialValues={{ bankName: '', cardNo: '', accTitle: '', accNo: '' }}
            validate={validation}
            onSubmit={addCardDetails}
        >
            <Form>
                <div className="row m-auto">
                    <div className="col-md-6">
                        <label className="d-block">Bank Name *</label>
                        <Field name="bankName" className="form-control" />
                        <ErrorMessage name="bankName" component="div" className="text-danger" />
                    </div>
                    <div className="col-md-6">
                        <label className="d-block">Card No*</label>
                        <Field name="cardNo" className="form-control" />
                        <ErrorMessage name="cardNo" component="div" className="text-danger" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label className="d-block">Account Title*</label>
                        <Field name="accTitle" className="form-control" />
                        <ErrorMessage name="accTitle" component="div" className="text-danger" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label className="d-block">Account No*</label>
                        <Field name="accNo" className="form-control" />
                        <ErrorMessage name="accNo" component="div" className="text-danger" />
                    </div>
                </div>
                <div className="m-auto text-center">
                    <Button className="w-25 mt-2 float-right m-4 mt-5" type="submit" > Save Details</Button>
                </div>
            </Form>
        </Formik>
    )
}
