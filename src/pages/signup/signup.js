import React from 'react';
import styles from './signup.module.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SignUpImage from '../../assets/images/signup.svg';


const Signup = () => {
    return (
        <div>
            <div className={styles.signupContainer}>
                <div className="w-75 h-75 m-auto bg-white">
                    <div className="row m-auto h-100">
                        <div className="col-md-4 h-100" style= {{backgroundColor : "#168574"}}>
                        <h5 className="pt-4 pl-2 text-white">Binaries</h5>

                            <h3 className="pt-5 pl-2 pb-4 text-white">A few clicks away from managing your businesses.</h3>
                            <img src={SignUpImage} className={styles.signupImg} alt="signup" />
                        </div>
                        <div className="col-md-8 h-100 d-flex align-items-center">
                            <div className="pl-5 h-75 w-100 ">
                                <h3><b>Register</b></h3>
                                <h5 className="pt-5"><b>Manage all your records efficiently</b></h5>
                                <h6 className="w-75 text-secondary">Let's get you all setup so you can verify your personal account and begin setting up your profile</h6>
                                <hr></hr>
                                <form>
                                    <div className="row m-auto">
                                        <div className="col-md-6">
                                            <label className="d-block">Name</label>
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-md-6">

                                            <label className="d-block">Email</label>
                                            <input className="form-control" />
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="col-md-6">
                                            <label className="d-block">Password</label>
                                            <input className="form-control" type="password" />
                                        </div>
                                        <div className="col-md-6">

                                            <label className="d-block">Confirm Password</label>
                                            <input className="form-control" type="password" />
                                        </div>

                                        <div className="col-md-12 pt-4 mb-5">
                                            <input className="" type="checkbox" />
                                            <span className="text-secondary pl-3">I agree to all the <span className="text-primary font-weight-bold">Terms and Conditions</span></span>
                                        </div>

                                    </div>
                                    <div className="m-auto">
                                        <Button className="pl-3 pr-3"> Create Account</Button>
                                        <h6 className="pt-3">
                                            <b>Already have an account?<Link to="/login" className="text-decoration-none pl-2">Login</Link></b>
                                        </h6>
                                    </div>


                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;