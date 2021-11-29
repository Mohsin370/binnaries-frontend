import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import styles from "./editProfile.module.css";
import UserPlaceHolder from "../../../assets/images/placeholder-user.png";
import uploadCamera from "../../../assets/icons/upload-camera.svg";
import { EditProfileDetails } from "../../../api/api";
import { connect } from "react-redux";
import { updateUserDetails } from "../../../redux/actions/actions";
import Toasts from "../../../components/toast_message/Toast";


function EditProfile(props) {
  const [uploadImage, setUploadImage] = useState("");
  const [showSpinner, setshowSpinner] = useState(false);
  const [showToast, setshowToast] = useState(false);
  const [toastMessage, settoastMessage] = useState({header:"", body: ""});
  

  const initialValues = {
    name: props.updateUserReducer ? props.updateUserReducer.name : "",
    email: props.updateUserReducer ? props.updateUserReducer.email : "",
  };

  useEffect(() => {
    if (props.updateUserReducer.profile_img) {
      setUploadImage(props.updateUserReducer.profile_img);
    }
  }, [props]);

  const validation = (values) => {
    const { name } = values;
    const errors = {};
    if (!name) {
      errors.name = "Required";
    }
    return errors;
  };

  const updateProfile = (values) => {
    setshowSpinner(true);
    if (uploadImage) {
      values.image = uploadImage;
    }else{
      values.image = null;
    }
    EditProfileDetails(values).then((res) => {
      if (res.data.message === "success") {
        //edit success message
        const { name, email } = values;
        props.updateUserDetails({
          name,
          email,
          profile_img: res.data.profile_img,
        });
        setshowSpinner(false);
        setshowToast(true);
        settoastMessage({header:"Success!", body:"Profile has been updated successfully"})
      } else {
        setshowSpinner(false);
        setshowToast(true);
        settoastMessage({header:"Error!", body:"Something Went Wrong"})
      }
    }).catch(()=>{
      setshowSpinner(false);
      setshowToast(true);
      settoastMessage({header:"Error!", body:"Something Went Wrong"})
    });
  };
  const setProfileImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setUploadImage(reader.result);
      };
    }
  };
  const toggleErrorToast = () => setshowToast(!showToast);


  return (
    <>
    
    <Toasts
          toggleToast={toggleErrorToast}
          showToast={showToast}
          header={toastMessage.header}
          body={toastMessage.body}
        />
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={updateProfile}
      enableReinitialize
    >
      <Form>
        <div>
          <div className={styles.profileContainer}>
            <img
              src={uploadImage ? uploadImage : UserPlaceHolder}
              alt="placeholder"
            />
            <label className={styles.editProfile}>
              <input
                name="uploadImage"
                type="file"
                id="uploadProfileImage"
                className="form-control"
                onChange={setProfileImage}
              />
              <img src={uploadCamera} alt="upload" />
            </label>
          </div>
        </div>
        <Row>
          <Col sm="9" className="m-auto pt-3">
            <label className="d-block">Name</label>
            <Field name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </Col>
          <Col sm="9" className="m-auto pt-3">
            <label className="d-block">Email</label>
            <Field
              type="email"
              name="email"
              className="form-control"
              disabled
            />
          </Col>
        </Row>
        <div className="text-center">
          <Button className="mt-5" type="submit" disabled={showSpinner}>
            Save
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
    </>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, updateUserDetails)(EditProfile);
