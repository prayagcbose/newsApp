import React from "react";
import "./SimpleCard.css";
import { Container, Col, Row } from "react-bootstrap";

function SimpleCard() {
	return (
		<div className="sc-main-box mx-5">
			<div className="sc-header">
				<h1>Covid Updates</h1>
			</div>
			<div className="sc-state">
				<p>Kerala</p>
			</div>
			<div className="sc-body">
				<p>phn no 98765</p>
				<p>phn no 98765</p>
				<p>phn no 98765</p>
			</div>
		</div>
	);
}

export default SimpleCard;
