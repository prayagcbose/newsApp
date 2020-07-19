import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ControlledCarousel from "../../../ControllerCarousel/ControlledCarousel";
import MainBox from "../../../MainBox/MainBox";
import {
	Popular,
	LatestNews,
	TopNews,
	Trending,
	Featured,
} from "../../../../Utilities/News/News";
import adhome from "./ad-home.jpg";
import SimpleCard from "./../../../../Utilities/CustomCards/SimpleCard/SimpleCard";

import "./IndexSection1.css";

function IndexSection1() {
	return (
		<Container fluid className="px-5">
			<Row className="d-flex justify-content-start align-items-stretch">
				<Col md={6}>
					<Row className="d-flex justify-content-start align-items-stretch my-5">
						<Col md={12}>
							<ControlledCarousel></ControlledCarousel>
						</Col>
					</Row>
					<Row className="d-flex justify-content-start align-items-stretch">
						<Col md={6} sm={12}>
							<MainBox title="Top News" inputArray={TopNews}></MainBox>
						</Col>
						<Col md={6} sm={12}>
							<MainBox title="popular" inputArray={Popular}></MainBox>
						</Col>
					</Row>
				</Col>
				<Col md={6}>
					<Row className="d-flex justify-content-start align-items-stretch">
						<Col md={6} sm={12}>
							<Row className="d-flex justify-content-start align-items-stretch">
								<MainBox title="Latest News" inputArray={LatestNews}></MainBox>
							</Row>
							<Row className="d-flex justify-content-start align-items-stretch">
								<MainBox title="featured" inputArray={Featured}></MainBox>
							</Row>
						</Col>
						<Col md={6} sm={12}>
							<Row className="d-flex justify-content-center align-items-stretch">
								<SimpleCard></SimpleCard>
							</Row>
							<Row className="d-flex justify-content-start align-items-stretch">
								<MainBox title="Trending" inputArray={Trending}></MainBox>
							</Row>
							<Row className="d-flex justify-content-center">
								<div className="w-75">
									<img src={adhome}></img>
								</div>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr></hr>
		</Container>
	);
}

export default IndexSection1;
