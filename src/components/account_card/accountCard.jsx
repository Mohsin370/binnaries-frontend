import React from "react";
import styles from "./accountCard.module.css";
import { Trash, Pencil } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

export default function AccountCard(props) {
  return (
    <div>
      <div className={styles.bankCardMain}>
        <Row>
          <Col sm={10}>
            <p>{props.bankName}</p>
          </Col>
          <Col sm={2}>
            <Row>
              <Trash className="mr-1" type="button" onClick={props.deleteItem} />
              <Pencil type="button" onClick={props.editItem} />{" "}
            </Row>
          </Col>
        </Row>
        <h5>Acc No: {props.accNo}</h5>
        <h4 className="">
          <span> {props.cardNo.slice(0, 4)}</span>
          <span className="pl-2"> {props.cardNo.slice(4, 8)}</span>
          <span className="pl-2"> {props.cardNo.slice(8, 12)}</span>
          <span className="pl-2"> {props.cardNo.slice(12, 16)}</span>
        </h4>
        <h6 className="mt-4">{props.accTitle}</h6>
      </div>
    </div>
  );
}
