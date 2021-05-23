import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Button} from 'react-bootstrap'

export default function form() {



    const addCardDetails = (formData) =>{
console.log(formData);
    }

    return (
        <Formik
        initialValues={{ bankName: '', branchName: '' ,accTitle: '', accNo: '' }}
        // validate={validation}
         onSubmit={addCardDetails}

    >
        <Form>
            <div className="row m-auto">
                <div className="col-md-6">
                    <label className="d-block">Bank Name</label>
                    <Field name="bankName" className="form-control" />
                    <ErrorMessage name="bankName" component="div" className="text-danger" />
                </div>
                <div className="col-md-6">
                    <label className="d-block">Branch Name</label>
                    <Field  name="branchName" className="form-control" />
                    <ErrorMessage name="branchName" component="div" className="text-danger" />
                </div>
                <div className="col-md-6 mt-4">
                    <label className="d-block">Account Title</label>
                    <Field  name="accTitle" className="form-control" />
                    <ErrorMessage name="accTitle" component="div" className="text-danger" />
                </div>
                <div className="col-md-6 mt-4">
                    <label className="d-block">Account No</label>
                    <Field name="accNo" className="form-control" />
                    <ErrorMessage name="accNo" component="div" className="text-danger" />
                </div>
         
            </div>
            <div className="m-auto text-center">
                <Button className="w-25 mt-2 float-right m-4 mt-5" type="submit"> Save Details</Button>
            </div>
        </Form>
    </Formik>
    )
}
