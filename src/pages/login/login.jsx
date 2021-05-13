import React from 'react';
import styles from './login.module.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import LoginImage from '../../assets/images/login.svg';
import { LoginApi } from '../../api/api';
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Login = () => {
    const history = useHistory();

    const loginUser = (formData) => {
    
        LoginApi(formData).then((res) => {
            if (res.data.message === "success") {
                history.push({
                    pathname: "/dashboard",
                });
            } else if (res.data.message === "exists") {
                console.log("user already exists")
            }

        }).catch((err) => {
            console.log({ err })
        })
    }

    return (
        <div>
            <div className={styles.loginContainer}>
                <div className="w-75 h-75 m-auto bg-white">
                    <div className="row m-auto h-100">
                        <div className="col-md-7 h-100" style={{ backgroundColor: "#74bec1" }}>
                            <h4 className="pt-4 pl-2 text-white">
                                <Link className="text-decoration-none text-white" to="/"> Binaries </Link></h4>

                            <h3 className="pt-5 pl-2 pb-4 text-white">We provide what your business demands.</h3>
                            <img src={LoginImage} className={styles.loginImg} alt="login" />
                        </div>
                        <div className="col-md-5 h-100 d-flex align-items-center">
                            <div className="pl-5 h-75 w-75 m-auto ">
                                <h3><b>Login</b></h3>
                                <h5 className="pt-5"><b>Login to your account</b></h5>
                                <h6 className="w-75 text-secondary">Thank you for getting back to Binaries, let's manage your business.</h6>
                                <hr></hr>
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    onSubmit={loginUser}

                                >
                                    <Form>
                                        <div className="row m-auto">
                                            <div className="col-md-12">

                                                <label className="d-block">Email</label>
                                                <Field name="email" className="form-control" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-12 mt-4">
                                                <label className="d-block">Password</label>
                                                <Field name="password" className="form-control" />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-12 pt-4 mb-5">
                                                <input className="" type="checkbox" />
                                                <span className="text-secondary pl-3">Remember me</span>
                                            </div>
                                        </div>
                                        <div className="m-auto text-center">
                                            <Button className=" w-75" type="submit"> Login</Button>
                                            <h6 className="pt-3">
                                                <b>Don't have an account yet?<Link to="/signup" className="text-decoration-none pl-2">Join Binaries Today</Link></b>
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

export default Login;