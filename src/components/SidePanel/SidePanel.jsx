import React from "react";

import img1 from "./img/full.jpg";
import adMac from "./img/ad-mac.jpg";

import { Photos, TopNews } from "../../Utilities/News/News";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import TextOnImg from "./../Layouts/TextOnImg/TextOnImg";
import MainBox from "./../MainBox/MainBox";
function SidePanel() {
	return (
		<Container fluid>
			<Row className="my-3">
				<Col md={12}>
					<TextOnImg
						img={img1}
						text="അതിരുവിട്ട് ചൈന
തിരിച്ചടിച്ച ഇന്ത്യ"
					></TextOnImg>
				</Col>
			</Row>
			<Row className="my-3">
				<Col md={12}>
					<MainBox title="Photos" inputArray={Photos}></MainBox>
				</Col>
			</Row>
			<Row className="my-3">
				<Col md={12}>
					<MainBox
						title="Recent Updates"
						inputArray={TopNews}
						fullHeight={true}
						updateBox={true}
						titleColor="red"
					></MainBox>
				</Col>
			</Row>
			<Row className="my-3">
				<Col md={12}>
					<div className="sp-img">
						<img src={adMac} alt="macdonalds" />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default SidePanel;
