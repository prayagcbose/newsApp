import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import janamPic from "./janam.jpg";

function Footer() {
	return (
		<div className="f-bg">
			<Container>
				<Row className="f-row-main">
					<Row className="f-row-1 w-100">
						<Col md={6} className="f-section-1 ">
							<div className="f-text1">
								<h3>
									<a href="#top"> Jannamunnani</a>
								</h3>
								<p>FOR the people country's</p>
								<p>most vibrant news channesl</p>
							</div>
						</Col>
						<Col md={6} className="f-section-2">
							<span>
								Address: <br></br>COLLEGE OF ENGINEERING <br></br> ,THALASSERY
								<br></br>
								CETTHALASSERY@gmail.com <br></br>Phone:7356725339 <br></br>
								9497600974
							</span>
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="d-flex justify-content-center">
							<hr></hr>
							<div className="w-80">
								<img src={janamPic} alt="janamunnani" />
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="d-flex justify-content-center">
							<p className="f-copy">
								Copyright © 2020 All rights reserved | Designed and Developed by
								DOCKFOX
							</p>
						</Col>
					</Row>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
