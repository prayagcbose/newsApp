import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import janamPic from "./janam.jpg";

function Footer() {
	return (
		<Container fluid className="footer-bg">
			<Row>
				<Row className="d-flex justify-content-center w-100">
					<Col md={6}>
						<h6>Jannamunnani</h6>
						<p>FOR the people country's most vibrant news channesl</p>
					</Col>
					<Col md={6} className="d-flex justify-content-center">
						<span>
							Address: <br></br>COLLEGE OF ENGINEERING <br></br> ,THALASSERY
							<br></br>
							CETTHALASSERY@gmail.com <br></br>Phone:7356725339 <br></br>
							9497600974
						</span>
					</Col>
				</Row>
			</Row>
			<hr></hr>
		</Container>
	);
}

export default Footer;
