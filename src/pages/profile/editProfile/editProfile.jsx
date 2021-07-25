import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./editProfile.module.css";
import UserPlaceHolder from "../../../assets/images/placeholder-user.png";
import uploadCamera from "../../../assets/icons/upload-camera.svg";
import { EditProfileDetails } from "../../../api/api";

function EditProfile() {
  const [uploadImage, setUploadImage] = useState("");
  const initialValues = {
    name: "",
    email: "",
    uploadImage: "",
  };

  const validation = (values) => {
    console.log(values);
    const { email, name } = values;
    const errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!name) {
      errors.name = "Required";
    }
    return errors;
  };

  const updateProfile = (values) => {
    if(uploadImage){
      values.image = uploadImage
    }
    values.token = localStorage.getItem('token')
    EditProfileDetails(values).then((res)=>{
      if(res.message === 'success'){
        //edit success message
      }else{
        //failed message
      }
    })
  };
  const setProfileImage = (e) => {
    if (e.target.files[0]) {
      setUploadImage(URL.createObjectURL(e.target.files[0]));
      console.log(URL.createObjectURL(e.target.files[0]));
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
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
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
