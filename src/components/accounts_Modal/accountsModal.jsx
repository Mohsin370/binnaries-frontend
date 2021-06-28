import React from "react";
import { Modal } from "react-bootstrap";
import FormComponent from "./form/form";

export default function AccountsModal(props) {
  return (
    <div>
      <Modal size="lg" show={props.show} centered onHide={props.closeModal}>
        <Modal.Header>
          <Modal.Title>
            {props.data ? "Edit" : "Add"} Account Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent
            closeModal={props.closeModal}
            updateData={props.updateData}
            data={props.data}
          ></FormComponent>
        </Modal.Body>
      </Modal>
    </div>
  );
}
