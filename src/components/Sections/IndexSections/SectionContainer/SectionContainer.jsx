import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SectionContainer.css";

function SectionContainer(props) {
	return (
		<Container fluid className="p-5">
			<Row>
				<Col xs={12}>
					<p className="sc-title">{props.title}</p>
					<div className="sc-line"></div>
				</Col>
			</Row>
			<Row className="pl-5">{props.children}</Row>
		</Container>
	);
}

export default SectionContainer;
