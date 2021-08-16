import React from "react";
import DashboardHOC from "../dashboardPages/dashboardHOC";
import { Col, Row } from "react-bootstrap";
import EditProfile from "./editProfile/editProfile";
import ChangePassword from "./changePassword/changePassword";

function Profile() {
  return (
    <Row className="m-auto">
      <Col sm="6" className="mt-5">
        <EditProfile></EditProfile>
      </Col>
      <Col sm="6" className="mt-5">
        <ChangePassword></ChangePassword>
      </Col>
    </Row>
  );
}
export default DashboardHOC(Profile);
