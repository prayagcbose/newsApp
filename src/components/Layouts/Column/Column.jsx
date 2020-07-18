import React from "react";
import { Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./Column.css";

function Column(props) {
	return (
		<Container fluid className="main">
			<Row className="d-flex align-items-start p-2">
				{props.img ? (
					<Col xs={6} className="d-flex align-items-center">
						<div className="img-div">
							<img src={props.img}></img>
						</div>
					</Col>
				) : null}
				<Col>
					<div className="text-div">
						<p>{props.text}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Column;
