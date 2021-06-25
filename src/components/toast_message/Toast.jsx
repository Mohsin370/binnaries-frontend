import React from 'react'
import styles from './Toast.module.css'
import {Row, Col,Toast} from 'react-bootstrap'

export default function Toasts(props) {
    return (
        <Row className={styles.ToastContainer}>
        <Col xs={12}>
          <Toast show={props.showToast} onClose={props.toggleToast} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{props.header}</strong>
            </Toast.Header>
            <Toast.Body>{props.body}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    )
}
