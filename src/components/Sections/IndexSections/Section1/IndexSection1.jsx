import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ControlledCarousel from "../../../ControllerCarousel/ControlledCarousel";
import MainBox from "../../../MainBox/MainBox";
import { LatestNews } from "../../../../Utilities/News/News";

function IndexSection1() {
	return (
		<Container fluid className="px-5">
			<Row className="d-flex justify-content-around align-items-stretch">
				<Col md={6}>
					<Row className="d-flex justify-content-around align-items-stretch">
						<Col>
							<ControlledCarousel></ControlledCarousel>
						</Col>
					</Row>
					<Row className="d-flex justify-content-around align-items-stretch">
						<Col md={3}>
							<MainBox
								title="Top News"
								inputArray={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
							></MainBox>
						</Col>
						<Col md={3}>
							<MainBox
								title="popular"
								inputArray={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
							></MainBox>
						</Col>
					</Row>
				</Col>
				<Col md={6}>
					<Row className="d-flex justify-content-around align-items-stretch">
						<Col md={3}>
							<Row className="d-flex justify-content-around align-items-stretch">
								<MainBox
									title="Latest News"
									inputArray={[LatestNews, 2, 3, 4, 5, 7, 8, 9, 10]}
								></MainBox>
							</Row>
							<Row className="d-flex justify-content-around align-items-stretch">
								<MainBox
									title="featured"
									inputArray={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
								></MainBox>
							</Row>
						</Col>
						<Col md={3}>
							<Row className="d-flex justify-content-around align-items-stretch">
								<h2>Row</h2>
							</Row>
							<Row className="d-flex justify-content-around align-items-stretch">
								<MainBox
									title="featured"
									inputArray={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
								></MainBox>
							</Row>
							<Row className="d-flex justify-content-around align-items-stretch">
								<h2>Row</h2>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default IndexSection1;
