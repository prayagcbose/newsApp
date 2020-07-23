import React from "react";

import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SidePanel from "../Sections/SpecificNewsSections/SidePanel/SidePanel";

function SpecificNews() {
	return (
		<Container fluid>
			<Row>
				<Col md={4}>
					<SidePanel></SidePanel>
				</Col>
			</Row>
		</Container>
	);
}

export default SpecificNews;
