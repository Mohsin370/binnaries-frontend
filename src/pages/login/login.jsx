import React, { useState } from "react";
import styles from "./login.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/images/login.svg";
import { LoginApi } from "../../api/api";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { updateLoginState } from "../../redux/actions/actions";
import Toasts from "../../components/toast_message/Toast";

const Login = (props) => {
  console.log(props);
  const history = useHistory();
  const [showError, setshowError] = useState(false);

  const validation = (values) => {
    const { email, password } = values;
    const errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Required";
    }
    return errors;
  };

  const loginUser = (formData) => {
    LoginApi(formData)
      .then((res) => {
        if (res.data.message === "success") {
          history.push({
            pathname: "/dashboard",
          });
          props.updateRoutes(res.data.userData);
     
        } else if (res.data.message === "invalid") {
          setshowError(true);
        } else if (res.data.message === "email_invalid") {
          setshowError(true);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const toggleErrorToast = () => setshowError(!showError);

  return (
    <div>
      {showError ? (
        <Toasts
          toggleToast={toggleErrorToast}
          showToast={showError}
          header="Login Error"
          body="Incorrect Username or Password"
        />
      ) : (
        ""
      )}
      <div className={styles.loginContainer}>
        <div className="w-75 h-75 m-auto bg-white">
          <div className="row m-auto h-100">
            <div
              className="col-md-7 h-100"
              style={{ backgroundColor: "#74bec1" }}
            >
              <h4 className="pt-4 pl-2 text-white">
                <Link className="text-decoration-none text-white" to="/">
                  Binaries
                </Link>
              </h4>
              <h3 className="pt-5 pl-2 pb-4 text-white">
                We provide what your business demands.
              </h3>
              <img src={LoginImage} className={styles.loginImg} alt="login" />
            </div>
            <div className="col-md-5 h-100 d-flex">
              <div className="pl-5 m-auto ">
                <h3>
                  <b>Login</b>
                </h3>
                <h5 className="pt-5">
                  <b>Login to your account</b>
                </h5>
                <h6 className="w-75 text-secondary">
                  Thank you for getting back to Binaries, let's manage your
                  business.
                </h6>
                <hr></hr>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={validation}
                  onSubmit={loginUser}
                >
                  <Form>
                    <div className="row m-auto">
                      <div className="col-md-12">
                        <label className="d-block">Email</label>
                        <Field name="email" className="form-control" />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label className="d-block">Password</label>
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="col-md-12 pt-4 mb-5">
                        <input className="" type="checkbox" />
                        <span className="text-secondary pl-3">Remember me</span>
                      </div>
                    </div>
                    <div className="m-auto text-center">
                      <Button className=" w-75" type="submit">
                        Login
                      </Button>
                      <h6 className="pt-3">
                        <b>
                          Don't have an account yet?
                          <Link
                            to="/signup"
                            className="text-decoration-none pl-2"
                          >
                            Join Binaries Today
                          </Link>
                        </b>
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
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, updateLoginState)(Login);
