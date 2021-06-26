import React from "react";
import { Modal } from "react-bootstrap";
import Form from "./form/form";

export default function AccountsModal(props) {
  console.log(props.data);

  return (
    <div>
      <Modal size="lg" show={props.show} centered onHide={props.closeModal}>
        <Modal.Header>
          <Modal.Title>
            {props.data ? "Edit" : "Add"} Account Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            closeModal={props.closeModal}
            updateData={props.updateData}
            data={props.data}
          ></Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
