import React from "react";

import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SidePanel from "./../SidePanel/SidePanel";
import Header from "./../Header/Header";
import Navigation from "./../Navigation/Navigation";
import CustomBreadCrumb from "./../CustomBreadCrumb/CustomBreadCrumb";
import Footer from "./../Footer/Footer";
import MainBox from "./../MainBox/MainBox";
import { CurrentNews } from "../../Utilities/News/News";
import { useParams } from "react-router-dom";

function SpecificNews() {
	let { place } = useParams();
	return (
		<div>
			<Header></Header>
			<Navigation></Navigation>
			<CustomBreadCrumb></CustomBreadCrumb>
			<Container>
				<Row>
					<Col md={8}>
						<h1>{place}</h1>
						<MainBox inputArray={CurrentNews} fullHeight></MainBox>
					</Col>
					<Col md={4}>
						<SidePanel></SidePanel>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
}

export default SpecificNews;
