import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./editProfile.module.css";
import UserPlaceHolder from "../../../assets/images/placeholder-user.png";
import uploadCamera from "../../../assets/icons/upload-camera.svg";
import { EditProfileDetails } from "../../../api/api";

function EditProfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [uploadImage, setUploadImage] = useState("");
  const initialValues = {
    name: userData ? userData.name : "",
    email: userData ? userData.email : "",
  };

  useEffect(() => {
    console.log(userData.profile_img);

    if (userData.profile_img) {
       setUploadImage(userData.profile_img);
    }
  },[userData.profile_img])


  const validation = (values) => {
    console.log(values);
    const { name } = values;
    const errors = {};
    if (!name) {
      errors.name = "Required";
    }
    return errors;
  };

  const updateProfile = (values) => {
    if (uploadImage) {
      values.image = uploadImage;
    }
    values.token = userData.token;
    values.uuid = userData.uuid;
    EditProfileDetails(values).then((res) => {
      if (res.message === "success") {
        //edit success message
      } else {
        //failed message
      }
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

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={updateProfile}
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
          <Button className="mt-5" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
export default EditProfile;
