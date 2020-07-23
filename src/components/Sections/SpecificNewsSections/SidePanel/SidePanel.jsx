import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextOnImg from "../../../Layouts/TextOnImg/TextOnImg";
import img1 from "./img/full.jpg";
import MainBox from "./../../../MainBox/MainBox";
import { Photos } from "../../../../Utilities/News/News";
function SidePanel() {
	return (
		<Container fluid>
			<Row>
				<Col md={12}>
					<TextOnImg
						img={img1}
						text="അതിരുവിട്ട് ചൈന
തിരിച്ചടിച്ച ഇന്ത്യ"
					></TextOnImg>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<MainBox title="Photos" inputArray={Photos}></MainBox>
				</Col>
			</Row>
		</Container>
	);
}

export default SidePanel;
