import React from "react";
import { Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./Column.css";

function Column(props) {
	//props needed : img, imgFill = {true/flase}, mainText, text
	return (
		<Container fluid className="main">
			<Row className="d-flex align-items-start p-2">
				{props.img ? (
					<Col
						xs={props.imgFill ? 12 : 6}
						className="d-flex align-items-center"
					>
						<div className="img-div">
							<img src={props.img}></img>
						</div>
					</Col>
				) : null}
				<Col>
					<div className="text-div">
						{props.mainText ? (
							<p style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
								{props.mainText}
							</p>
						) : null}
						{props.text ? <p>{props.text}</p> : null}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Column;
