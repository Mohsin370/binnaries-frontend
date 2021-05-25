import React from 'react';
import styles from './accountCard.module.css';


export default function AccountCard(props) {




	return (
		<div>
			<div className={styles.bankCardMain}>
				<p className="font-weight-bold">Bank Alfalah</p>
				<h6>Acc No: 02911006863210</h6>
				<h5 className="">
          <span> {props.cardNo.slice(0, 4)}</span>
					<span className="pl-2"> {props.cardNo.slice(4, 8)}</span>
					<span className="pl-2"> {props.cardNo.slice(8, 12)}</span>
					<span className="pl-2"> {props.cardNo.slice(12, 16)}</span>
				</h5>
				<div className="d-flex"> <h6 className={styles.smallestFont}>Valid<br></br> From</h6>  <h6 className="pl-2 pr-4">15/8</h6> <h6 className={styles.smallestFont}>Valid <br></br> Until</h6>  <h6 className="pl-2">15/8</h6></div>
				<h6>Khawaja Mohsin Ijaz</h6>
			</div>
		</div>
	)
}
