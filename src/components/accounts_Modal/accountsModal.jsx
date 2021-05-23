import React from 'react'
import { Modal } from 'react-bootstrap';
import Form from './form/form'

export default function AccountsModal(props) {
	return (
		<div>
			<Modal size="lg" show={props.show} centered onHide={props.closeModal} >
				<Modal.Header >
					<Modal.Title>Add Account Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form></Form>
				</Modal.Body>

			</Modal>
		</div>
	)
}