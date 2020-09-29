import React from "react";
import { Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./Column.css";
import { Link } from "react-router-dom";

function Column({ img, imgFill = false, mainText, text, subText }) {
	return (
		<Container fluid className="main">
			<Row className="d-flex align-items-start p-2">
				{img ? (
					<Col xs={imgFill ? 12 : 6} className="d-flex align-items-center">
						<Link to={`/DetailedNews/${text}`}>
							<div className="img-div">
								<img src={img}></img>
							</div>
						</Link>
					</Col>
				) : null}
				<Col>
					<div className="text-div">
						{text ? <p>{text}</p> : null}
						{subText ? (
							<p style={{ fontWeight: "400", fontSize: ".8rem" }}>{subText}</p>
						) : null}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Column;
