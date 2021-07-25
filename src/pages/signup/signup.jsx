import React, { useState } from 'react';
import styles from './signup.module.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SignUpImage from '../../assets/images/signup.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {SignupAPi} from '../../api/api';
import { useHistory } from "react-router";



const Signup = () => {
    const history = useHistory();

    const [canSubmit, setcanSubmit] = useState(false);

    const validation = (values) => {
        const {name,email,password,confirmPassword,TC} = values;
        const errors = {};
        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (!name) {
            errors.name = 'Required'
        } else if (name.length < 2) {
            errors.name = 'Name is too short'
        }

        if (!password) {
            errors.password = 'Required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Password not matched';
        }


        if (!TC) {
            errors.TC = "err"
        }


        if (Object.entries(errors) < 1) {
            setcanSubmit(true)
        } else {
            setcanSubmit(false)
        }

        return errors;
    }

    const submitForm = async (formData) => {
         SignupAPi(formData).then((res)=>{
            if(res.data.message === "success"){
                history.push({
                    pathname:  "/login",
                 });
            }else if (res.data.message === "exists"){
                console.log("user already exists")
            }

        }).catch((err)=>{
            console.log({err})
        })

    }

    return (
        <div>
            <div className={styles.signupContainer}>
                <div className="w-75 h-75 m-auto bg-white">
                    <div className="row m-auto h-100">
                        <div className="col-md-4 h-100" style={{ backgroundColor: "#168574" }}>
                            <h4 className="pt-4 pl-2 text-white">
                                <Link className="text-decoration-none text-white" to="/"> Binaries </Link>
                            </h4>
                            <h3 className="pt-5 pl-2 pb-4 text-white">A few clicks away from managing your businesses.</h3>
                            <img src={SignUpImage} className={styles.signupImg} alt="signup" />
                        </div>
                        <div className="col-md-8 h-100 d-flex align-items-center">
                            <div className="pl-5 h-75 w-100 ">
                                <h3><b>Register</b></h3>
                                <h5 className="pt-5"><b>Manage all your records efficiently</b></h5>
                                <h6 className="w-75 text-secondary">Let's get you all setup so you can verify your personal account and begin setting up your profile</h6>
                                <hr></hr>
                                <Formik
                                    initialValues={{ email: '', password: '', name: "", confirmPassword: "", TC: false }}
                                    validate={validation}
                                    onSubmit={submitForm}
                                >

                                    <Form>
                                        <div className="row m-auto">
                                            <div className="col-md-6">
                                                <label className="d-block">Name</label>
                                                <Field name="name" className="form-control" />
                                                <ErrorMessage name="name" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-6">

                                                <label className="d-block">Email</label>
                                                <Field type="email" name="email" className="form-control" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <div className="col-md-6">
                                                <label className="d-block">Password</label>
                                                <Field type="password" name="password" className="form-control" />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="d-block">Confirm Password</label>
                                                <Field type="password" name="confirmPassword" className="form-control" />
                                                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                            </div>

                                            <div className="col-md-12 pt-4 mb-5">
                                                <Field className="" type="checkbox" name="TC" />
                                                <span className="text-secondary pl-3">I agree to all the <span className="text-primary font-weight-bold">Terms and Conditions</span></span>
                                            </div>

                                        </div>
                                        <div className="m-auto">
                                            <Button className="pl-3 pr-3" type="submit" disabled={!canSubmit}> Create Account</Button>
                                            <h6 className="pt-3">
                                                <b>Already have an account?<Link to="/login" className="text-decoration-none pl-2">Login</Link></b>
                                            </h6>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;